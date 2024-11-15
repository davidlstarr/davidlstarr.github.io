"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[11830],{11830:(e,t,o)=>{o.r(t),o.d(t,{default:()=>te});var r=o(35143),i=o(16868),n=o(3825),s=o(50076),l=o(53084),a=o(76460),d=o(77717),p=o(48611),u=o(50346),c=o(90534),y=o(46053),f=(o(81806),o(28379)),h=o(85842),v=o(17707),m=o(25515),g=o(12406),b=o(19502),w=o(31362),_=o(11270),T=o(94729),M=o(5682),S=o(90260),x=o(40565),A=o(6409),C=o(42553);o(47249);let Z=class extends C.oY{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,r._)([(0,y.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Z.prototype,"field",void 0),(0,r._)([(0,y.MZ)({readOnly:!0,nonNullable:!0,json:{read:!1}})],Z.prototype,"type",void 0),Z=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudFilter")],Z);const j=Z;var I;let V=I=class extends j{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new I({field:this.field,requiredClearBits:(0,l.o8)(this.requiredClearBits),requiredSetBits:(0,l.o8)(this.requiredSetBits)})}};(0,r._)([(0,y.MZ)({type:[x.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],V.prototype,"requiredClearBits",void 0),(0,r._)([(0,y.MZ)({type:[x.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],V.prototype,"requiredSetBits",void 0),(0,r._)([(0,A.e)({pointCloudBitfieldFilter:"bitfield"})],V.prototype,"type",void 0),V=I=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],V);const P=V;var R;let F=R=class extends j{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new R({field:this.field,includedReturns:(0,l.o8)(this.includedReturns)})}};(0,r._)([(0,y.MZ)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"includedReturns",void 0),(0,r._)([(0,A.e)({pointCloudReturnFilter:"return"})],F.prototype,"type",void 0),F=R=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],F);const q=F;var B;let z=B=class extends j{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new B({field:this.field,mode:this.mode,values:(0,l.o8)(this.values)})}};(0,r._)([(0,y.MZ)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"mode",void 0),(0,r._)([(0,A.e)({pointCloudValueFilter:"value"})],z.prototype,"type",void 0),(0,r._)([(0,y.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"values",void 0),z=B=(0,r._)([(0,h.$)("esri.layers.pointCloudFilters.PointCloudValueFilter")],z);const $={key:"type",base:j,typeMap:{value:z,bitfield:P,return:q}};var N,O=o(95363),E=o(44135),k=o(76350),K=o(81779),D=o(90975),L=o(120);let U=N=class extends L.A{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new N({...this.cloneProperties(),field:(0,l.o8)(this.field)})}};(0,r._)([(0,A.e)({pointCloudRGBRenderer:"point-cloud-rgb"})],U.prototype,"type",void 0),(0,r._)([(0,y.MZ)({type:String,json:{write:!0}})],U.prototype,"field",void 0),U=N=(0,r._)([(0,h.$)("esri.renderers.PointCloudRGBRenderer")],U);const Y=U;var G=o(42600),W=o(64724);const X={key:"type",base:L.A,typeMap:{"point-cloud-class-breaks":D.A,"point-cloud-rgb":Y,"point-cloud-stretch":G.A,"point-cloud-unique-value":W.A},errorContext:"renderer"};var J=o(12482),Q=o(30973);const H=(0,k.p)();let ee=class extends((0,S.w6)((0,b.b)((0,_.q)((0,T.A)((0,M.j)((0,d.P)((0,w.d)((0,g.p)(m.A))))))))){constructor(){super(...arguments),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,o){return Array.isArray(e)?e.map((e=>{const t=new E.default;return"FieldTypeInteger"===e.type&&((e=(0,l.o8)(e)).type="esriFieldTypeInteger"),t.read(e,o),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new E.default({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,o,r){(0,p.sM)("layerDefinition.drawingInfo.renderer",e.write({},r),t)}load(e){const t=null!=e?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.throwIfAbortError).then((()=>this._fetchService(t)));return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){const t=(0,Q.tn)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const o=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!o)return;const r=new K.A({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],r],o.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const o=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!o)return;const r=new K.A({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],r],o.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new s.A("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const o=this.fieldsIndex.get(e);if(!o)throw new s.A("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const r of this.attributeStorageInfo)if(r.name===o.name){const e=(0,c.fj)(this.parsedUrl?.path??"",`./statistics/${r.key}`);return(0,n.default)(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s.A("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(S.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(S.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s.A("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;(0,J.XF)(a.A.getLogger(this),(0,J.B)("Point cloud layers","absolute-height",e)),(0,J.XF)(a.A.getLogger(this),(0,J.tW)("Point cloud layers",e))}};(0,r._)([(0,y.MZ)({type:["PointCloudLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,r._)([(0,y.MZ)(O.M6)],ee.prototype,"popupEnabled",void 0),(0,r._)([(0,y.MZ)({type:i.A,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),(0,r._)([(0,y.MZ)({readOnly:!0,json:{read:!1}})],ee.prototype,"defaultPopupTemplate",null),(0,r._)([(0,y.MZ)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ee.prototype,"opacity",void 0),(0,r._)([(0,y.MZ)({type:["show","hide"]})],ee.prototype,"listMode",void 0),(0,r._)([(0,y.MZ)({types:[$],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ee.prototype,"filters",void 0),(0,r._)([(0,y.MZ)({type:[E.default]})],ee.prototype,"fields",void 0),(0,r._)([(0,y.MZ)(H.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),(0,r._)([(0,f.w)("service","fields",["fields","attributeStorageInfo"])],ee.prototype,"readServiceFields",null),(0,r._)([(0,y.MZ)(H.outFields)],ee.prototype,"outFields",void 0),(0,r._)([(0,y.MZ)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),(0,r._)([(0,y.MZ)(O.Yj)],ee.prototype,"elevationInfo",null),(0,r._)([(0,y.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),(0,r._)([(0,y.MZ)(O.fV)],ee.prototype,"legendEnabled",void 0),(0,r._)([(0,y.MZ)({types:X,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:X},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ee.prototype,"renderer",void 0),(0,r._)([(0,v.K)("renderer")],ee.prototype,"writeRenderer",null),(0,r._)([(0,y.MZ)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),ee=(0,r._)([(0,h.$)("esri.layers.PointCloudLayer")],ee);const te=ee},90975:(e,t,o)=>{o.d(t,{A:()=>g});var r,i=o(35143),n=o(53084),s=o(46053),l=(o(81806),o(76460),o(6409)),a=o(85842),d=o(120),p=o(84563),u=o(69539),c=o(42553),y=o(40565);let f=r=class extends c.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,n.o8)(this.color)})}};(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"description",void 0),(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,i._)([(0,s.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],f.prototype,"minValue",void 0),(0,i._)([(0,s.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],f.prototype,"maxValue",void 0),(0,i._)([(0,s.MZ)({type:u.A,json:{type:[y.jz],write:!0}})],f.prototype,"color",void 0),f=r=(0,i._)([(0,a.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],f);const h=f;var v;let m=v=class extends d.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new v({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,n.o8)(this.colorClassBreakInfos),legendOptions:(0,n.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),(0,i._)([(0,s.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,i._)([(0,s.MZ)({type:p.A,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,i._)([(0,s.MZ)({type:d.A.fieldTransformTypeKebabDict.apiValues,json:{type:d.A.fieldTransformTypeKebabDict.jsonValues,read:d.A.fieldTransformTypeKebabDict.read,write:d.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.MZ)({type:[h],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0),m=v=(0,i._)([(0,a.$)("esri.renderers.PointCloudClassBreaksRenderer")],m);const g=m},120:(e,t,o)=>{o.d(t,{A:()=>S});var r,i=o(35143),n=o(45802),s=o(42553),l=o(53084),a=o(46053),d=(o(81806),o(76460),o(85842));o(47249);let p=r=class extends s.oY{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,i._)([(0,a.MZ)({type:String,json:{write:!0}})],p.prototype,"field",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=r=(0,i._)([(0,d.$)("esri.renderers.support.pointCloud.ColorModulation")],p);const u=p,c=new n.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let y=class extends s.oY{};(0,i._)([(0,a.MZ)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],y.prototype,"type",void 0),y=(0,i._)([(0,d.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y);const f=y;var h,v=o(6409);let m=h=class extends f{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,i._)([(0,v.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),(0,i._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=h=(0,i._)([(0,d.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const g=m;var b;let w=b=class extends f{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new b({scaleFactor:this.scaleFactor})}};(0,i._)([(0,v.e)({pointCloudSplatAlgorithm:"splat"})],w.prototype,"type",void 0),(0,i._)([(0,a.MZ)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],w.prototype,"scaleFactor",void 0),w=b=(0,i._)([(0,d.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],w);const _={key:"type",base:f,typeMap:{"fixed-size":g,splat:w}},T=(0,n.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let M=class extends s.oY{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.o8)(this.pointSizeAlgorithm),colorModulation:(0,l.o8)(this.colorModulation),pointsPerInch:(0,l.o8)(this.pointsPerInch)}}};(0,i._)([(0,a.MZ)({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:T.write}})],M.prototype,"type",void 0),(0,i._)([(0,a.MZ)({types:_,json:{write:!0}})],M.prototype,"pointSizeAlgorithm",void 0),(0,i._)([(0,a.MZ)({type:u,json:{write:!0}})],M.prototype,"colorModulation",void 0),(0,i._)([(0,a.MZ)({json:{write:!0},nonNullable:!0,type:Number})],M.prototype,"pointsPerInch",void 0),M=(0,i._)([(0,d.$)("esri.renderers.PointCloudRenderer")],M),(M||(M={})).fieldTransformTypeKebabDict=new n.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const S=M},42600:(e,t,o)=>{o.d(t,{A:()=>y});var r,i=o(35143),n=o(53084),s=o(46053),l=(o(81806),o(76460),o(6409)),a=o(85842),d=o(120),p=o(84563),u=o(77718);let c=r=class extends d.A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,n.o8)(this.field),fieldTransformType:(0,n.o8)(this.fieldTransformType),stops:(0,n.o8)(this.stops),legendOptions:(0,n.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,i._)([(0,s.MZ)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,i._)([(0,s.MZ)({type:p.A,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,i._)([(0,s.MZ)({type:d.A.fieldTransformTypeKebabDict.apiValues,json:{type:d.A.fieldTransformTypeKebabDict.jsonValues,read:d.A.fieldTransformTypeKebabDict.read,write:d.A.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.MZ)({type:[u.A],json:{write:!0}})],c.prototype,"stops",void 0),c=r=(0,i._)([(0,a.$)("esri.renderers.PointCloudStretchRenderer")],c);const y=c},64724:(e,t,o)=>{o.d(t,{A:()=>g});var r,i=o(35143),n=o(53084),s=o(46053),l=(o(81806),o(76460),o(6409)),a=o(85842),d=o(120),p=o(84563),u=o(69539),c=o(42553),y=o(40565);let f=r=class extends c.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,n.o8)(this.values),color:(0,n.o8)(this.color)})}};(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"description",void 0),(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],f.prototype,"label",void 0),(0,i._)([(0,s.MZ)({type:[String],json:{write:!0}})],f.prototype,"values",void 0),(0,i._)([(0,s.MZ)({type:u.A,json:{type:[y.jz],write:!0}})],f.prototype,"color",void 0),f=r=(0,i._)([(0,a.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],f);const h=f;var v;let m=v=class extends d.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new v({...this.cloneProperties(),field:(0,n.o8)(this.field),fieldTransformType:(0,n.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,n.o8)(this.colorUniqueValueInfos),legendOptions:(0,n.o8)(this.legendOptions)})}};(0,i._)([(0,l.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),(0,i._)([(0,s.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,i._)([(0,s.MZ)({type:d.A.fieldTransformTypeKebabDict.apiValues,json:{type:d.A.fieldTransformTypeKebabDict.jsonValues,read:d.A.fieldTransformTypeKebabDict.read,write:d.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.MZ)({type:[h],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),(0,i._)([(0,s.MZ)({type:p.A,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=v=(0,i._)([(0,a.$)("esri.renderers.PointCloudUniqueValueRenderer")],m);const g=m},12482:(e,t,o)=>{o.d(t,{$7:()=>g,B:()=>m,Fo:()=>h,M7:()=>_,Q5:()=>v,XF:()=>w,bK:()=>s,bh:()=>d,id:()=>c,ky:()=>a,qt:()=>T,tW:()=>b,w7:()=>l,wS:()=>y,xS:()=>f});var r=o(31633),i=o(59097);function n(e){return e?T:M}function s(e,t){return null!=t?t:n(e)}function l(e,t){return function(e,t){return t?.mode?t.mode:n(e).mode}(null==e||(e.hasZ??!1),t)}function a(e){const t=p(e);return l(e.geometry,t)}function d(e){const t=p(e),o=l(e.geometry,t),r=null!=t&&"on-the-ground"!==o?_(t):0,i=t?.featureExpressionInfo;return{mode:o,offset:r,featureExpressionInfo:i}}function p(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function u(e,t){if(!e?.offset)return 0;const{offset:o,unit:i}=e;if("decimal-degrees"===i)return 0;const n="unknown"!==i&&i?i:"meters",s=(0,r.mq)(t);return s?(0,r.oU)(o,n,s):0}function c(e,t,o){if(!o?.mode)return;const r=e.hasZ?e.z:0,i=u(o,e.spatialReference);switch(o.mode){case"absolute-height":return r-i;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground")??0)+i);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene")??0)+i)}}function y(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return h(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,o,r)}function f(e,t,o,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return h(e,t[0],t[1],t.length>2?t[2]:0,o,r,i)}function h(e,t,o,r,i,n){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==n)return;const l=null!=s?s.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:a}=v(t,o,r,i,e,n);return function(e,t,o,r,i,n,s,l){const a=u(s,i);switch(l){case"absolute-height":return e-a;case"relative-to-ground":return e-((n.elevationProvider.getElevation(t,o,r,i,"ground")??0)+a);case"relative-to-scene":return e-((n.elevationProvider.getElevation(t,o,r,i,"scene")??0)+a)}}(a,t,o,r,i,e,s,l)}function v(e,t,o,r,i,n){const s=u(n,r);switch(n.mode){case"absolute-height":return{absoluteZ:o+s,elevation:0};case"on-the-ground":{const o=i.elevationProvider.getElevation(e,t,0,r,"ground")??0;return{absoluteZ:o,elevation:o}}case"relative-to-ground":{const n=i.elevationProvider.getElevation(e,t,o,r,"ground")??0;return{absoluteZ:o+n+s,elevation:n}}case"relative-to-scene":{const n=i.elevationProvider.getElevation(e,t,o,r,"scene")??0;return{absoluteZ:o+n+s,elevation:n}}}}function m(e,t,o){return o&&o.mode!==t?`${e} only support ${t} elevation mode`:null}function g(e,t,o){return o?.mode===t?`${e} do not support ${t} elevation mode`:null}function b(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function w(e,t){t&&e.warn(".elevationInfo=",t)}function _(e){return(e?.offset??0)*(0,i.Ao)(e?.unit)}const T={mode:"absolute-height",offset:0},M={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=11830.8172a83b.chunk.js.map