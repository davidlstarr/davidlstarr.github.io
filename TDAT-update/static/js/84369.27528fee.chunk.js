"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[84369],{84369:(e,t,i)=>{i.r(t),i.d(t,{default:()=>B});var r,s=i(35143),o=(i(35238),i(16868)),n=(i(63844),i(14873),i(47662),i(72690),i(17122),i(71832),i(5766),i(35039),i(86616)),a=i(31382),l=i(3825),d=i(69098),p=i(50076),c=i(54901),u=i(53084),h=i(76460),y=i(77717),m=i(50346),f=i(46053),g=i(40565),v=i(28379),w=i(85842),b=i(31608),_=i(25515),S=i(19502),I=i(65624),M=i(31362),Z=i(74440),x=i(52908),j=i(11270),A=i(94729),R=i(21617),F=i(5682),T=i(78817),P=i(95363),k=i(91447),O=i(44135),E=i(76350),D=i(53430),C=i(71401),N=i(27937),U=i(42553);i(81806),i(47249);let L=r=class extends U.oY{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new r({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"age",void 0),(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"ageReceived",void 0),(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"displayCount",void 0),(0,s._)([(0,f.MZ)({type:Number,json:{write:!0}})],L.prototype,"maxObservations",void 0),L=r=(0,s._)([(0,w.$)("esri.layers.support.PurgeOptions")],L);const V=L;var J=i(81589),G=i(68295),z=i(30973),$=i(731),X=i(61701),q=i(13312),W=i(76797);const Y=(0,E.p)();function H(e,t){return new p.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let Q=class extends((0,x.J)((0,Z.F)((0,I.dM)((0,T.e)((0,F.j)((0,R.J)((0,S.b)((0,j.q)((0,A.A)((0,y.P)((0,M.d)((0,d.O)(_.A))))))))))))){constructor(){super(...arguments),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new V,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=q.A.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=(0,m.debounce)((async(e,t,r)=>{const{save:s,saveAs:o}=await i.e(99367).then(i.bind(i,99367));switch(e){case X.X.SAVE:return s(this,t);case X.X.SAVE_AS:return o(this,r,t)}}))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p.A("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(m.throwIfAbortError).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){(0,D.fixRendererFields)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,i){t=t.layerDefinition||t;const r=t.drawingInfo?.renderer;if(r){const e=(0,n.read)(r,t,i)||void 0;return e||h.A.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}return(0,k.PD)(t,i)}async connect(e){const[{createConnection:t}]=await Promise.all([i.e(55039).then(i.bind(i,55039)),this.load()]),r=this.geometryType?b.g.toJSON(this.geometryType):null,{customParameters:s=null,definitionExpression:o=null,geometryDefinition:n=null,maxReconnectionAttempts:a=0,maxReconnectionInterval:l=20,spatialReference:d=this.spatialReference}=e||this.createConnectionParameters(),p=t(this.parsedUrl,this.spatialReference,d,r,o,n,a,l,s??void 0),u=(0,c.vE)([this.on("send-message-to-socket",(e=>p.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>p.sendMessageToClient(e)))]);return p.once("destroy",u.remove),p}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return(0,z.tn)(this,e)}createQuery(){const e=new G.default;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let i=null;return this.fields.some((t=>(t.name===e&&(i=t.domain),!!i))),i}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(X.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(X.X.SAVE_AS,t,e)}write(e,t){const i=t?.messages;return this.webSocketUrl?(i?.push(H(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(i?.push(H(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await(0,l.default)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}}else{if(!this.timeInfo?.trackIdField)throw new p.A("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new p.A("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new p.A("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new O.default({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new p.A("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),(0,D.fixRendererFields)(this.renderer,this.fieldsIndex),(0,D.fixTimeInfoFields)(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),(0,J.L)(this,{origin:"service"})}};(0,s._)([(0,f.MZ)({type:String})],Q.prototype,"copyright",void 0),(0,s._)([(0,f.MZ)({readOnly:!0})],Q.prototype,"defaultPopupTemplate",null),(0,s._)([(0,f.MZ)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Q.prototype,"definitionExpression",void 0),(0,s._)([(0,f.MZ)({type:String})],Q.prototype,"displayField",void 0),(0,s._)([(0,f.MZ)({type:$.A})],Q.prototype,"elevationInfo",void 0),(0,s._)([(0,f.MZ)({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],Q.prototype,"featureReduction",null),(0,s._)([(0,f.MZ)(Y.fields)],Q.prototype,"fields",void 0),(0,s._)([(0,f.MZ)(Y.fieldsIndex)],Q.prototype,"fieldsIndex",void 0),(0,s._)([(0,f.MZ)({type:W.A,json:{name:"layerDefinition.definitionGeometry",write:!0}})],Q.prototype,"geometryDefinition",void 0),(0,s._)([(0,f.MZ)({type:b.g.apiValues,json:{read:{reader:b.g.read}}})],Q.prototype,"geometryType",void 0),(0,s._)([(0,f.MZ)(P.kF)],Q.prototype,"labelsVisible",void 0),(0,s._)([(0,f.MZ)({type:[C.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:N.w},write:!0}})],Q.prototype,"labelingInfo",void 0),(0,s._)([(0,f.MZ)(P.fV)],Q.prototype,"legendEnabled",void 0),(0,s._)([(0,f.MZ)({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],Q.prototype,"listMode",void 0),(0,s._)([(0,f.MZ)({type:g.jz})],Q.prototype,"maxReconnectionAttempts",void 0),(0,s._)([(0,f.MZ)({type:g.jz})],Q.prototype,"maxReconnectionInterval",void 0),(0,s._)([(0,f.MZ)(P.hG)],Q.prototype,"maxScale",void 0),(0,s._)([(0,f.MZ)(P.hn)],Q.prototype,"minScale",void 0),(0,s._)([(0,f.MZ)({type:String})],Q.prototype,"objectIdField",void 0),(0,s._)([(0,f.MZ)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],Q.prototype,"operationalLayerType",void 0),(0,s._)([(0,f.MZ)({readOnly:!0})],Q.prototype,"outFields",void 0),(0,s._)([(0,f.MZ)(P.M6)],Q.prototype,"popupEnabled",void 0),(0,s._)([(0,f.MZ)({type:o.A,json:{name:"popupInfo",write:!0}})],Q.prototype,"popupTemplate",void 0),(0,s._)([(0,f.MZ)({type:V})],Q.prototype,"purgeOptions",void 0),(0,s._)([(0,f.MZ)({json:{read:!1,write:!1}})],Q.prototype,"refreshInterval",void 0),(0,s._)([(0,f.MZ)({types:a.H,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:a.X,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],Q.prototype,"renderer",null),(0,s._)([(0,v.w)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,v.w)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],Q.prototype,"readRenderer",null),(0,s._)([(0,f.MZ)((()=>{const e=(0,u.o8)(P.PY);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],Q.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,f.MZ)()],Q.prototype,"sourceJSON",void 0),(0,s._)([(0,f.MZ)({type:q.A,json:{origins:{service:{read:{source:"spatialReference"}}}}})],Q.prototype,"spatialReference",void 0),(0,s._)([(0,f.MZ)({json:{read:!1}})],Q.prototype,"type",void 0),(0,s._)([(0,f.MZ)(P.OZ)],Q.prototype,"url",void 0),(0,s._)([(0,f.MZ)({type:Number})],Q.prototype,"updateInterval",void 0),(0,s._)([(0,f.MZ)({json:{read:!1,write:!1}})],Q.prototype,"useViewTime",void 0),(0,s._)([(0,f.MZ)({type:String})],Q.prototype,"webSocketUrl",void 0),Q=(0,s._)([(0,w.$)("esri.layers.StreamLayer")],Q);const B=Q}}]);
//# sourceMappingURL=84369.27528fee.chunk.js.map