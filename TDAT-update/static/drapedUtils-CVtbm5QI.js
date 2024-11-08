function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-CN4ACLGJ.js","./index-D6NxmjlF.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d8 as ee,eE as te,eD as re,jw as se,jx as T,fe as D,J as l,K as c,jy as ie,dU as ne,bD as k,aH as M,f as oe,eF as ae,M as A,by as Z,bE as le,aT as U,bC as ue,gM as pe,bF as ye,b_ as ce,bH as he,bG as fe,P as de,bz as me,fb as ge,aI as be,s as H,B as P,aO as we,aU as z,e8 as J,_ as xe,ez as ve,aY as N,al as $e,jz as Se,at as Q,jA as Fe,cv as je}from"./index-CN4ACLGJ.js";import{n as Ee,p as Oe}from"./popupUtils-OSfq1O7C.js";function _(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function Re(t){let e=0,s=0;for(let n=0;n<t.length;n++){const r=t[n].size;typeof r=="number"&&(e+=r,s++)}return e/s}function q(t,e){var s;return typeof t=="number"?t:(s=t==null?void 0:t.stops)!=null&&s.length?Re(t.stops):e}function Me(t,e){if(!e)return t;const s=e.filter(i=>i.type==="size").map(i=>{const{maxSize:u,minSize:y}=i;return(q(u,t)+q(y,t))/2});let n=0;const r=s.length;if(r===0)return t;for(let i=0;i<r;i++)n+=s[i];const o=Math.floor(n/r);return Math.max(o,t)}function B(t){var o;const e=t==null?void 0:t.renderer,s=t==null?void 0:t.pointerType,n=s==="touch"?9:6;if(!e)return n;const r="visualVariables"in e?Me(n,e.visualVariables):n;if(e.type==="simple")return _(r,e.symbol);if(e.type==="unique-value"){let i=r;return(o=e.uniqueValueInfos)==null||o.forEach(u=>{i=_(i,u.symbol)}),i}if(e.type==="class-breaks"){let i=r;return e.classBreakInfos.forEach(u=>{i=_(i,u.symbol)}),i}return e.type==="dot-density"||e.type,r}function Ie(t,e){const{dpi:s,gdbVersion:n,geometry:r,geometryPrecision:o,height:i,historicMoment:u,layerOption:y,mapExtent:a,maxAllowableOffset:p,returnFieldName:h,returnGeometry:m,returnUnformattedValues:v,returnZ:$,spatialReference:j,timeExtent:d,tolerance:F,width:b}=t.toJSON(),{dynamicLayers:g,layerDefs:w,layerIds:R}=Pe(t),I=(e==null?void 0:e.geometry)!=null?e.geometry:null,x={historicMoment:u,geometryPrecision:o,maxAllowableOffset:p,returnFieldName:h,returnGeometry:m,returnUnformattedValues:v,returnZ:$,tolerance:F},E=(I==null?void 0:I.toJSON())||r;x.imageDisplay=`${b},${i},${s}`,n&&(x.gdbVersion=n),E&&(delete E.spatialReference,x.geometry=JSON.stringify(E),x.geometryType=ee(E));const L=j??(E==null?void 0:E.spatialReference)??(a==null?void 0:a.spatialReference);if(L&&(x.sr=te(L)),x.time=d?[d.start,d.end].join(","):null,a){const{xmin:W,ymin:K,xmax:Y,ymax:X}=a;x.mapExtent=`${W},${K},${Y},${X}`}return w&&(x.layerDefs=w),g&&!w&&(x.dynamicLayers=g),x.layers=y==="popup"?"visible":y,R&&!g&&(x.layers+=`:${R.join(",")}`),x}function Pe(t){var $,j;const{mapExtent:e,floors:s,width:n,sublayers:r,layerIds:o,layerOption:i,gdbVersion:u}=t,y=(j=($=r==null?void 0:r.find(d=>d.layer!=null))==null?void 0:$.layer)==null?void 0:j.serviceSublayers,a=i==="popup",p={},h=re({extent:e,width:n,spatialReference:e==null?void 0:e.spatialReference}),m=[],v=d=>{const F=h===0,b=d.minScale===0||h<=d.minScale,g=d.maxScale===0||h>=d.maxScale;if(d.visible&&(F||b&&g))if(d.sublayers)d.sublayers.forEach(v);else{if((o==null?void 0:o.includes(d.id))===!1||a&&(!d.popupTemplate||!d.popupEnabled))return;m.unshift(d)}};if(r==null||r.forEach(v),r&&!m.length)p.layerIds=[];else{const d=se(m,y,u),F=m.map(b=>{const g=T(s,b);return b.toExportImageJSON(g)});if(d)p.dynamicLayers=JSON.stringify(F);else{if(r){let g=m.map(({id:w})=>w);o&&(g=g.filter(w=>o.includes(w))),p.layerIds=g}else o!=null&&o.length&&(p.layerIds=o);const b=_e(s,m);if(b!=null&&b.length){const g={};for(const w of b)w.definitionExpression&&(g[w.id]=w.definitionExpression);Object.keys(g).length&&(p.layerDefs=JSON.stringify(g))}}}return p}function _e(t,e){const s=!!(t!=null&&t.length),n=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return n.length?n.map(r=>{const o=T(t,r),i=D(o,r.definitionExpression);return{id:r.id,definitionExpression:i??void 0}}):null}var G;let f=G=class extends Z{static from(t){return le(G,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};l([c({type:Number,json:{write:!0}})],f.prototype,"dpi",void 0),l([c()],f.prototype,"floors",void 0),l([c({type:String,json:{write:!0}})],f.prototype,"gdbVersion",void 0),l([c({types:ie,json:{read:ne,write:!0}})],f.prototype,"geometry",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"height",void 0),l([c({type:Date})],f.prototype,"historicMoment",void 0),l([k("historicMoment")],f.prototype,"writeHistoricMoment",null),l([c({type:[Number],json:{write:!0}})],f.prototype,"layerIds",void 0),l([c({type:["top","visible","all","popup"],json:{write:!0}})],f.prototype,"layerOption",void 0),l([c({type:M,json:{write:!0}})],f.prototype,"mapExtent",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnFieldName",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnGeometry",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnM",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnUnformattedValues",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnZ",void 0),l([c({type:oe,json:{write:!0}})],f.prototype,"spatialReference",void 0),l([c()],f.prototype,"sublayers",void 0),l([c({type:ae,json:{write:!0}})],f.prototype,"timeExtent",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"tolerance",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"width",void 0),f=G=l([A("esri.rest.support.IdentifyParameters")],f);const C=f;let S=class extends Z{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return U.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:n}=t;s&&(e.attributes={...s}),n!=null&&(e.geometry=n.toJSON(),e.geometryType=pe.toJSON(n.type))}};l([c({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),l([c({type:U})],S.prototype,"feature",void 0),l([ue("feature",["attributes","geometry"])],S.prototype,"readFeature",null),l([k("feature")],S.prototype,"writeFeature",null),l([c({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),l([c({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=l([A("esri.rest.support.IdentifyResult")],S);const Ve=S;async function Ne(t,e,s){const n=(e=Te(e)).geometry?[e.geometry]:[],r=ye(t);return r.path+="/identify",ce(n).then(o=>{const i=Ie(e,{geometry:o==null?void 0:o[0]}),u=he({...r.query,f:"json",...i}),y=fe(u,s);return de(r.path,y).then(Ge).then(a=>Ae(a,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>Ve.fromJSON(s)),e}function Te(t){return t=C.from(t)}function Ae(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function n(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(n)}e.forEach(n);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let V=null;function qe(t,e){return e.type==="tile"||e.type==="map-image"}let O=class extends me{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=ge(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([be(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var i,u;const{layerView:{layer:s,view:{scale:n}}}=this;if(!t)throw new H("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Ue(s.sublayers,n,e);if(!r.length)return[];const o=await He(s,r);if(!((((u=(i=s.capabilities)==null?void 0:i.operations)==null?void 0:u.supportsIdentify)??!0)&&s.version>=10.5)&&!o)throw new H("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return o?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return P();let s=null;if(t instanceof U?s=[t]:we.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s==null?void 0:s.filter(z),!(s!=null&&s.length))return P();for(const n of s){const r=n.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(n.visible=!1)}return e.addMany(s),P(()=>e.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:n}=this;if(s&&n)for(const r of t){const o=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&o&&"getSymbolAsync"in o&&o.getSymbolAsync(r).then(async i=>{var a;i||(i=new J);let u=null;const y="visualVariables"in o?(a=o.visualVariables)==null?void 0:a.find(p=>p.type==="size"):void 0;y&&(V||(V=(await xe(()=>import("./index-CN4ACLGJ.js").then(p=>p.p4),__vite__mapDeps([0,1]),import.meta.url)).getSize),u=V(y,r,{view:e.type,scale:e.scale,shape:i.type==="simple-marker"?i.style:null})),u||(u="width"in i&&"height"in i&&i.width!=null&&i.height!=null?Math.max(i.width,i.height):"size"in i?i.size:16),s.includes(r)&&(r.symbol=new J({style:"square",size:u,xoffset:"xoffset"in i?i.xoffset:0,yoffset:"yoffset"in i?i.yoffset:0}),n(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:n,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(n!=null&&n.length)||!e.capabilities.operations.supportsQuery)return;const o=this._getTargetResolution(t),i=new Map;for(const a of n)if(!this._featuresResolutions.has(a)||this._featuresResolutions.get(a)>o){const p=a.sourceLayer;ve(i,p,()=>new Map).set(a.getObjectId(),a)}const u=Array.from(i,([a,p])=>{const h=a.createQuery();return h.objectIds=[...p.keys()],h.outFields=[a.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=o,h.outSpatialReference=s.spatialReference,a.queryFeatures(h)}),y=await Promise.all(u);if(!this.destroyed)for(const{features:a}of y)for(const p of a){const h=p.sourceLayer,m=i.get(h).get(p.getObjectId());m&&n.includes(m)&&(m.geometry=p.geometry,r(m,"geometry"),this._featuresResolutions.set(m,o))}}_getTargetResolution(t){const e=t*N(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const n=await this._createIdentifyParameters(t,e,s);if(n==null)return[];const{results:r}=await Ne(this.layerView.layer.parsedUrl,n,s);return r.map(o=>o.feature)}async _createIdentifyParameters(t,e,s){const{floors:n,layer:r,timeExtent:o,view:{spatialReference:i,scale:u}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:v})=>v.load(s).catch(()=>{})));const y=Math.min($e("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((v,$)=>$.renderer?B({renderer:$.renderer,pointerType:s==null?void 0:s.pointerType}):v,2)),a=this.createFetchPopupFeaturesQueryGeometry(t,y),p=Se(u,i),h=Math.round(a.width/p),m=new M({xmin:a.center.x-p*h,ymin:a.center.y-p*h,xmax:a.center.x+p*h,ymax:a.center.y+p*h,spatialReference:a.spatialReference});return new C({floors:n,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:i,sublayers:r.sublayers,timeExtent:o,tolerance:y,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:n,timeExtent:r}}=this,o=e.map(async({sublayer:i,popupTemplate:u})=>{var w;if(await i.load(s).catch(()=>{}),i.capabilities&&!i.capabilities.operations.supportsQuery)return[];const y=i.createQuery(),a=B({renderer:i.renderer,pointerType:s==null?void 0:s.pointerType}),p=this.createFetchPopupFeaturesQueryGeometry(t,a),h=new Set,[m]=await Promise.all([Ee(i,u),(w=i.renderer)==null?void 0:w.collectRequiredFields(h,i.fieldsIndex)]);Q(s),Fe(h,i.fieldsIndex,m);const v=Array.from(h).sort();y.geometry=p,y.outFields=v,y.timeExtent=r;const $=T(n,i);y.where=D(y.where,$);const j=this._getTargetResolution(p.width/a),d=await Le(u);Q(s);const F=i.geometryType==="point"||d&&d.arcadeUtils.hasGeometryOperations(u);F||(y.maxAllowableOffset=j);let{features:b}=await i.queryFeatures(y,s);const g=F?0:j;b=await ze(i,b,s);for(const R of b)this._featuresResolutions.set(R,g);return b});return(await Promise.allSettled(o)).reduce((i,u)=>u.status==="fulfilled"?[...i,...u.value]:i,[]).filter(z)}};function Ue(t,e,s){const n=[];if(!t)return n;const r=o=>{const i=o.minScale===0||e<=o.minScale,u=o.maxScale===0||e>=o.maxScale;if(o.visible&&i&&u){if(o.sublayers)o.sublayers.forEach(r);else if(o.popupEnabled){const y=Oe(o,{...s,defaultPopupTemplateEnabled:!1});y!=null&&n.unshift({sublayer:o,popupTemplate:y})}}};return t.map(r),n}function Le(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?je():Promise.resolve()}async function He(t,e){var s,n;if((n=(s=t.capabilities)==null?void 0:s.operations)!=null&&n.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function ze(t,e,s){const n=t.renderer;return n&&"defaultSymbol"in n&&!n.defaultSymbol&&(e=n.valueExpression?await Promise.all(e.map(r=>n.getSymbolAsync(r,s).then(o=>o?r:null))).then(r=>r.filter(o=>o!=null)):e.filter(r=>n.getSymbol(r)!=null)),e}l([c({constructOnly:!0})],O.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),l([c({constructOnly:!0})],O.prototype,"layerView",void 0),l([c({constructOnly:!0})],O.prototype,"highlightGraphics",void 0),l([c({constructOnly:!0})],O.prototype,"highlightGraphicUpdated",void 0),l([c({constructOnly:!0})],O.prototype,"updatingHandles",void 0),O=l([A("esri.views.layers.support.MapServiceLayerViewHelper")],O);function Be(t,e,s,n=new M){let r=0;if(s.type==="2d")r=e*(s.resolution??0);else if(s.type==="3d"){const p=s.overlayPixelSizeInMapUnits(t),h=s.basemapSpatialReference;r=h==null||h.equals(s.spatialReference)?e*p:N(h)/N(s.spatialReference)}const o=t.x-r,i=t.y-r,u=t.x+r,y=t.y+r,{spatialReference:a}=s;return n.xmin=Math.min(o,u),n.ymin=Math.min(i,y),n.xmax=Math.max(o,u),n.ymax=Math.max(i,y),n.spatialReference=a,n}new M;export{qe as U,O as _,Be as r};
