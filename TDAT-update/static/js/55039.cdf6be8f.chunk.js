"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[55039],{55039:(e,t,r)=>{r.r(t),r.d(t,{createConnection:()=>R});var s=r(35143),o=(r(35238),r(3825)),n=r(50076),i=r(76460),c=r(50346),a=r(90534),u=(r(81806),r(47249),r(85842)),l=r(46053),h=r(86729),d=r(54099);let g=class extends d.A.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new n.A("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};(0,s._)([(0,l.MZ)({readOnly:!0})],g.prototype,"connectionError",null),g=(0,s._)([(0,u.$)("esri.layers.support.StreamConnection")],g);const f=g;var _,y;(y=_||(_={}))[y.CONNECTING=0]="CONNECTING",y[y.OPEN=1]="OPEN",y[y.CLOSING=2]="CLOSING",y[y.CLOSED=3]="CLOSED";let p=class extends f{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=(0,h.N)(t,s,r),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case _.CONNECTING:case _.OPEN:return"connected";case _.CLOSING:case _.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._config.source.path,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;try{if(this.destroyed)return;const t=(0,a.a6)(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(g){const o=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(i.A.getLogger(this).error(new n.A("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(i.A.getLogger(this).error(new n.A("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,g)),await(0,c.after)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(t){return void i.A.getLogger(this).error(new n.A("websocket-connection","Failed to parse message, invalid JSON",{error:t}))}}}_createWebSocket(e){return new Promise(((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=e=>{s.onopen=s.onclose=null,r(e)}}))}async _handshake(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;const t=this._websocket;if(null==t)return;const r=(0,c.createResolver)(),s=t.onmessage,{filter:o,outFields:a,spatialReference:u}=this._config;return r.timeout(e),t.onmessage=e=>{let c=null;try{c=JSON.parse(e.data)}catch(_){}c&&"object"==typeof c||(i.A.getLogger(this).error(new n.A("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),r.reject(),this.destroy()),c.spatialReference?.wkid!==u?.wkid&&(i.A.getLogger(this).error(new n.A("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${u.wkid}`,e.data)),r.reject(),this.destroy()),"json"!==c.format&&(i.A.getLogger(this).error(new n.A("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),r.reject(),this.destroy()),o&&c.filter!==o&&i.A.getLogger(this).error(new n.A("websocket-connection","Tried to set filter, but server doesn't support it")),a&&c.outFields!==a&&i.A.getLogger(this).error(new n.A("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s;for(const r of this._outstandingMessages)t.send(JSON.stringify(r));this._outstandingMessages=[],r.resolve()},t.send(JSON.stringify({filter:o,outFields:a,format:"json",spatialReference:{wkid:u.wkid}})),r.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),i.A.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&i.A.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,s._)([(0,l.MZ)()],p.prototype,"connectionStatus",null),(0,s._)([(0,l.MZ)()],p.prototype,"errorString",void 0),p=(0,s._)([(0,u.$)("esri.layers.graphics.sources.connections.WebSocketConnection")],p);var w=r(36643),m=r(68295),S=r(19902),b=r(13312);const k={maxQueryDepth:5,maxRecordCountFactor:3};let v=class extends p{constructor(e){super({...k,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||i.A.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let r;try{r=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(r.geometry)}catch(t){return void i.A.getLogger(this).error(new n.A("geoevent-connection","Failed to parse message",t))}this.onFeature(r)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=(0,o.default)(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return(0,a.a6)(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return i.A.getLogger(this).error(new n.A("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(null==r||null==e&&null==t)return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const a=(0,c.createResolver)();return r.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(i.A.getLogger(this).error(new n.A("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),a.reject(t.error)),this._setWebSocketJSONParseHandler(r),o=!0,a.resolve())},r.send(s),setTimeout((()=>{o||(this.destroyed||this._websocket!==r||i.A.getLogger(this).error(new n.A("geoevent-connection","Server timed out when setting filter")),a.reject())}),1e4),a.promise}_serializeFilter(e,t){const r={};if(null==e&&null==t)return r;if(e?.geometry)try{const t=(0,S.fromJSON)(e.geometry);if("extent"!==t.type)throw new n.A(`Expected extent but found type ${t.type}`);r.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(s){i.A.getLogger(this).error(new n.A("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(r.where=e.where),null!=t&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return i.A.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:c}=s;for(const n in o)e.attributes[n]=o[n];return c&&(e.geometry=c),e.geometry||e.centroid||i.A.getLogger(this).error(new n.A("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(y){i.A.getLogger(this).error(new n.A("geoevent-connection","Encountered an error when querying buddy services",{error:y}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.resolve().then(r.bind(r,38451))).default)({url:e}),{capabilities:s}=await t.load(),o=s.query.supportsMaxRecordCountFactor,n=s.query.supportsPagination,i=s.query.supportsCentroid,c=this._config.maxRecordCountFactor,a=t.capabilities.query.maxRecordCount,u=o?a*c:a,l=new m.default;if(l.outFields=this._config.outFields??["*"],l.where=this._config.filter?.where??"1=1",l.returnGeometry=!0,l.returnExceededLimitFeatures=!0,l.outSpatialReference=b.A.fromJSON(this._config.spatialReference),i&&(l.returnCentroid=!0),o&&(l.maxRecordCountFactor=c),n)return l.num=u,t.destroy(),this._queryPages(e,l);const h=await(0,w.eW)(e,l,this._config.sourceSpatialReference);return t.destroy(),h.data}async _queryPages(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t.start=null!=t.num?s*t.num:null;const{data:o}=await(0,w.eW)(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,s+1)):(r.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const e=o.attributes[s];t.set(e,o)}this._relatedFeatures=t}};v=(0,s._)([(0,u.$)("esri.layers.graphics.sources.connections.GeoEventConnection")],v);const A=v;let C=class extends f{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=(0,h.N)(t,s,r)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};function F(e,t){if(null==e&&null==t)return null;const r={};return null!=t&&(r.geometry=t),null!=e&&(r.where=e),r}function R(e,t,r,s,o,n,i,c,a){const u={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:F(o,n),maxReconnectionAttempts:i,maxReconnectionInterval:c,customParameters:a};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new p(u):new A(u):new C(u)}(0,s._)([(0,l.MZ)()],C.prototype,"connectionStatus",void 0),(0,s._)([(0,l.MZ)()],C.prototype,"errorString",void 0),C=(0,s._)([(0,u.$)("esri.layers.support.ClientSideConnection")],C)}}]);
//# sourceMappingURL=55039.cdf6be8f.chunk.js.map