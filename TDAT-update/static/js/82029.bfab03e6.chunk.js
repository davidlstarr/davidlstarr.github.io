"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[82029],{44680:(e,t,i)=>{function n(){return[1,0,0,0,1,0,0,0,1]}function r(e,t,i,n,r,s,o,a,l){return[e,t,i,n,r,s,o,a,l]}i.d(t,{fA:()=>r,vt:()=>n,zK:()=>s});const s=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:n,createView:function(e,t){return new Float64Array(e,t,9)},fromValues:r},Symbol.toStringTag,{value:"Module"}))},33723:(e,t,i)=>{i.d(t,{O:()=>u,W:()=>d});var n=i(63919),r=i(44680),s=i(19555),o=i(20664);const a=(0,i(9392).vt)(),l=(0,r.vt)(),h=(0,r.vt)(),c=(0,r.vt)();function d(e,t,i){return(0,o.i)(a,t[0],t[1],1),(0,o.q)(a,a,(0,n.mg)(l,i)),0===a[2]?(0,s.hZ)(e,a[0],a[1]):(0,s.hZ)(e,a[0]/a[2],a[1]/a[2])}function u(e,t,i){return m(h,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),m(c,i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]),(0,n.lw)(e,(0,n.KC)(h,h),c),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function m(e,t,i,r,s,h,c,d,u){(0,n.hZ)(e,t,r,h,i,s,c,1,1,1),(0,o.i)(a,d,u,1),(0,n.KC)(l,e);const[m,p,f]=(0,o.q)(a,a,(0,n.mg)(l,l));return(0,n.hZ)(l,m,0,0,0,p,0,0,0,f),(0,n.lw)(e,l,e)}},48341:(e,t,i)=>{i.d(t,{NH:()=>o,ip:()=>a,sU:()=>h,vG:()=>c});i(81806);var n=i(50076),r=i(50346),s=i(90534);function o(e){const t=l(e);return null!=t?t.toDataURL():""}async function a(e,t){const i=l(e);if(null==i)throw new n.A("imageToArrayBuffer","Unsupported image type");const o=function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,s.DB)(t)){const e=(0,s.r$)(t);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),a=await new Promise((e=>i.toBlob(e,o)));if((0,r.throwIfAborted)(t),!a)throw new n.A("imageToArrayBuffer","Failed to encode image");const h=await a.arrayBuffer();return(0,r.throwIfAborted)(t),{data:h,type:o}}function l(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");return e instanceof HTMLImageElement?i.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&i.putImageData(e,0,0),t}function h(e){const t=[],i=new Uint8Array(e);for(let n=0;n<i.length;n++)t.push(String.fromCharCode(i[n]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function c(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}},23290:(e,t,i)=>{i.d(t,{_:()=>d});var n=i(35143),r=i(91967),s=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),a=i(65215),l=i(26346),h=i(2413),c=i(54222);let d=class extends r.A{constructor(e){super(e)}get bounds(){const e=this.coords;return null==e?.extent?null:(0,h.VY)(e.extent)}get coords(){const e=this.element.georeference?.coords;return(0,l.projectOrLoad)(e,this.spatialReference).geometry}get normalizedCoords(){return a.A.fromJSON((0,c.jZ)(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,h.VY)(e):null}};(0,n._)([(0,s.MZ)()],d.prototype,"spatialReference",void 0),(0,n._)([(0,s.MZ)()],d.prototype,"element",void 0),(0,n._)([(0,s.MZ)()],d.prototype,"bounds",null),(0,n._)([(0,s.MZ)()],d.prototype,"coords",null),(0,n._)([(0,s.MZ)()],d.prototype,"normalizedCoords",null),(0,n._)([(0,s.MZ)()],d.prototype,"normalizedBounds",null),d=(0,n._)([(0,o.$)("esri.layers.support.MediaElementView")],d)},23717:(e,t,i)=>{i.d(t,{A:()=>C});var n=i(53494),r=i(63919),s=i(85827),o=i(59422),a=i(83755),l=i(1438),h=i(80963),c=i(28632),d=i(61551),u=i(36201),m=i(30726),p=i(64780),f=i(90356),_=i(70479),y=i(32743),g=i(35143),v=i(94047),w=i(60984);class x extends v.ZA{}(0,g._)([(0,v.C5)(0,w.ZY)],x.prototype,"pos",void 0),(0,g._)([(0,v.C5)(1,w.ZY)],x.prototype,"uv",void 0);class A extends v.HS{}class T extends v.k2{}(0,g._)([(0,v.Pi)(w.U)],T.prototype,"dvs",void 0);class M extends v.k2{}(0,g._)([(0,v.Pi)(w.ZY)],M.prototype,"perspective",void 0),(0,g._)([(0,v.Pi)(w.ZY)],M.prototype,"texSize",void 0),(0,g._)([(0,v.Pi)(w.nt)],M.prototype,"wrapAroundShift",void 0),(0,g._)([(0,v.Pi)(w.nt)],M.prototype,"opacity",void 0),(0,g._)([(0,v.Pi)(w.z7)],M.prototype,"texture",void 0);class b extends v.A{vertex(e){const t=e.uv.divide(this.config.texSize),i=new w.nt(1).add((0,w.Om)(t,this.config.perspective)),n=new w.eB(e.pos.add(new w.ZY(this.config.wrapAroundShift,0)),1),r=this.transform.dvs.multiply(n);return{uv:t,glPosition:new w.Zb(r.xy.multiply(i),0,i)}}fragment(e){const t=(0,w.US)(this.config.texture,e.uv).multiply(this.config.opacity),i=new v.mm;return i.glFragColor=t,i}}(0,g._)([(0,v.Pi)(T)],b.prototype,"transform",void 0),(0,g._)([(0,v.Pi)(M)],b.prototype,"config",void 0),(0,g._)([(0,g.a)(0,(0,v.hF)(x))],b.prototype,"vertex",null),(0,g._)([(0,g.a)(0,(0,v.hF)(A))],b.prototype,"fragment",null);var S=i(93345);class E extends _.j{constructor(){super(...arguments),this.type=y.N.Overlay,this._mesh=null,this.shaders={overlay:new b}}render(e,t){const{context:i,painter:n}=e,r=this._getMesh(e,t);n.setPipelineState(f.i);const{isWrapAround:s,wrapAroundShift:o}=t.config,a={...t.config,wrapAroundShift:0},l={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:a},defines:null,optionalAttributes:null,useComputeBuffer:!1};n.setPipelineState({...f.i,stencil:{write:!1,test:{compare:S.MT.EQUAL,op:{fail:S.eA.KEEP,zFail:S.eA.KEEP,zPass:S.eA.REPLACE},ref:0,mask:255}}}),n.submitDrawMeshUntyped(i,l,r),s&&(a.wrapAroundShift=o,n.submitDrawMeshUntyped(i,l,r))}shutdown(){(0,m.pR)(this._mesh)}_getMesh(e,t){const{context:i}=e;if(this._mesh){const e=this._mesh.vertexBuffers.get("positions");if(!e)throw new Error("Buffer not found");e.setData(t.position)}else{const e=null!=t.index?t.index.length:t.position.length/2;this._mesh=new p.e(i,{vertex:{positions:t.position,uvs:t.tex},index:null!=t.index?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:S.pe.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:S.pe.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:null!=t.index?"index":void 0,primitive:S.WR.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:e}]})}return this._mesh}}class C extends u.A{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=(0,s.vt)(),this._overlayTechnique=new E}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==d.S5.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const i of this.children)i.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:i,size:s,pixelRatio:h,resolution:c,rotation:d,viewpoint:u,displayMat3:m}=t;if(this._viewStateId===i)return;const p=(0,n.DF)(d),f=h*s[0],_=h*s[1];this._localOrigin=u.targetGeometry.clone();const{x:y,y:g}=this._localOrigin,v=(0,l.mT)(y,t.spatialReference);this._localOrigin.x=v,this._localOrigin.y=g;const w=c*f,x=c*_,A=(0,r.D_)(this._dvsMat3);(0,r.lw)(A,A,m),(0,r.Tl)(A,A,(0,o.fA)(f/2,_/2)),(0,r.hs)(A,A,(0,a.fA)(f/w,-_/x,1)),(0,r.e$)(A,A,-p),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:r,spatialReference:s,worldScreenWidth:o,size:a,viewpoint:l}=i,d=this._localOrigin;let u,m=0;const p=(0,h.Vp)(s);if(p&&s.isWrappable){const e=a[0],t=a[1],h=(0,n.DF)(r),d=Math.abs(Math.cos(h)),f=Math.abs(Math.sin(h)),_=Math.round(e*d+t*f),[y,g]=p.valid,v=(0,c.FT)(s),{x:w,y:x}=l.targetGeometry,A=[w,x],T=[0,0];i.toScreen(T,A);const M=[0,0];let b;b=_>o?.5*o:.5*_;const S=Math.floor((w+.5*v)/v),E=y+S*v,C=g+S*v,F=[T[0]+b,0];i.toMap(M,F),M[0]>C&&(m=v),F[0]=T[0]-b,i.toMap(M,F),M[0]<E&&(m=-v),u={worldWidth:v,xBounds:[y,g]}}for(const n of t)n.updateDrawCoords(d,m,s,u)}}},21532:(e,t,i)=>{i.d(t,{ZH:()=>c});var n=i(54901),r=i(91417),s=(i(48341),i(28808)),o=i(95776);function a(e,t){const{width:i,height:n,getFrame:s}=e,o=e.frameDurations.slice(),a=o.pop();return o.push((0,r.l5)(a+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:o,getFrame:s,width:i,height:n}}class l{constructor(e,t,i,n){this._animation=e,this._repeatType=i,this._onFrameData=n,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let r=0;for(;t>r;)r+=this.timeToFrame,this.nextFrame();const s=this._animation.getFrame(this._currentFrame);this._onFrameData(s)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case s.fu.None:this._currentFrame-=this._direction;break;case s.fu.Loop:this._currentFrame=0;break;case s.fu.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(-1===this._currentFrame)switch(this._repeatType){case s.fu.None:this._currentFrame-=this._direction;break;case s.fu.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case s.fu.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const e=this._animation.getFrame(this._currentFrame);this._onFrameData(e)}}function h(e,t,i,n){let h,{repeatType:c}=t;if(null==c&&(c=s.fu.Loop),!0===t.reverseAnimation&&(e=function(e){const{width:t,height:i}=e,n=e.frameDurations.reverse();return{frameCount:e.frameCount,duration:e.duration,frameDurations:n,getFrame:t=>{const i=e.frameDurations.length-1-t;return e.getFrame(i)},width:t,height:i}}(e)),null!=t.duration&&(e=function(e,t){const{width:i,height:n,getFrame:s}=e,o=t/e.duration,a=e.frameDurations.map((e=>(0,r.l5)(e*o)));return{frameCount:e.frameCount,duration:e.duration,frameDurations:a,getFrame:s,width:i,height:n}}(e,(0,r.l5)(1e3*t.duration))),null!=t.repeatDelay){const i=1e3*t.repeatDelay;c===s.fu.Loop?e=a(e,(0,r.l5)(i)):c===s.fu.Oscillate&&(e=function(e,t){const{width:i,height:n,getFrame:s}=e,o=e.frameDurations.slice(),a=o.shift();return o.unshift((0,r.l5)(a+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:o,getFrame:s,width:i,height:n}}(a(e,(0,r.l5)(i/2)),(0,r.l5)(i/2)))}if(null!=t.startTimeOffset)h=(0,r.l5)(1e3*t.startTimeOffset);else if(null!=t.randomizeStartTime){const n=82749913,s=null!=t.randomizeStartSeed?t.randomizeStartSeed:n,a=(0,o.J)(i,s);h=(0,r.l5)(a*function(e){return(0,r.l5)(e.frameDurations.reduce(((e,t)=>e+t),0))}(e))}else h=(0,r.l5)(0);return new l(e,h,c,n)}function c(e,t,i,r){const s=null==t.playAnimation||t.playAnimation,o=h(e,t,i,r);let a,l=o.timeToFrame;return function e(){a=s?setTimeout((()=>{o.nextFrame(),l=o.timeToFrame,e()}),l):void 0}(),(0,n.hA)((()=>s&&clearTimeout(a)))}},95776:(e,t,i)=>{i.d(t,{A:()=>s,J:()=>r});var n=i(88685);function r(e,t){let i;if("string"==typeof e)i=(0,n.Wm)(e+`-seed(${t})`);else{let n=12;i=e^t;do{i=107*(i>>8^i)+n|0}while(0!=--n)}return(1+i/(1<<31))/2}function s(e){return Math.floor(r(e,o)*a)}const o=53290320,a=10},82029:(e,t,i)=>{i.r(t),i.d(t,{default:()=>$});var n=i(35143),r=(i(35238),i(39356),i(63844),i(14873),i(47662),i(72690),i(17122),i(71832),i(5766),i(35039),i(86616),i(76460)),s=(i(95444),i(94643)),o=i(50076),a=(i(81806),i(87663)),l=i(50346),h=i(68134),c=i(46053),d=(i(47249),i(85842)),u=i(2413),m=i(11352),p=i(65658),f=i(23290),_=(i(52394),i(15434),i(59784),i(86560),i(13442),i(28808)),y=(i(14522),i(76797)),g=(i(89189),i(66388),i(19247),i(65215),i(23701),i(5095),i(62484),i(61425),i(3789),i(5568),i(80963),i(62032),i(89425),i(15709),i(88764),i(9435),i(50724),i(94046),i(94168),i(73988),i(27847),i(33049),i(4754),i(31385),i(278),i(71687),i(6134),i(9190),i(5104),i(41704),i(16083),i(27150),i(19313),i(15941),i(59422),i(71447),i(84202),i(42436),i(17400),i(54099),i(81447),i(61551),i(38545),i(28608),i(61678),i(93345)),v=(i(12331),i(89179),i(29492)),w=(i(61247),i(89241),i(84662),i(35048),i(63584),i(99588),i(41838),i(83531),i(76418),i(8254),i(47709),i(3825),i(90534),i(29234),i(56789),i(32743),i(98590),i(5096),i(72729),i(16946),i(28972),i(53522),i(69539),i(90113),i(81320),i(13308),i(33346),i(13720),i(38550),i(9410),i(57156),i(98112),i(42294),i(81615),i(64346),i(26455),i(4480),i(41406),i(57162),i(64839),i(33721),i(68009),i(43321),i(38983),i(83755),i(73548),i(13312),i(14556),i(55171),i(13692),i(56924),i(98773),i(19451),i(57105),i(31633),i(34111),i(7724),i(482),i(86599),i(63885),i(40181),i(93453),i(15389)),x=i(96345),A=i(79053),T=i(88321),M=i(30726),b=i(33723),S=i(44680),E=i(19555),C=i(72745),F=i(8794),R=i(21532),V=i(96673);const D=[1,1],q=(0,S.vt)(),O={none:_.fu.None,loop:_.fu.Loop,oscillate:_.fu.Oscillate};class P extends F.q{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.wrapAroundShift=0,this.perspectiveTransform=(0,C.vt)(),this._handles=new T.A,this._vertices=new Float32Array(8),this._indices=new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]),this._handles.add([(0,h.watch)((()=>this.elementView.element.opacity),(e=>this.opacity=e),h.initial),(0,h.watch)((()=>[this.elementView.coords]),(()=>{this.requestRender()}),h.initial),(0,h.watch)((()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions]),(()=>{this._handles.remove("play"),this.texture=(0,M.WD)(this.texture),this.requestRender()}),h.initial),(0,h.when)((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&null!=e.content&&(this._handles.add([(0,A.on)(e.content,"play",(()=>this.requestRender())),(0,A.on)(e.content,"loadeddata",(()=>this.requestRender())),(0,A.on)(e.content,"loaded",(()=>this.requestRender()))]),"requestVideoFrameCallback"in e.content?e.content.requestVideoFrameCallback((()=>this.requestRender())):this._handles.add([(0,A.on)(e.content,"seeked",(()=>this.requestRender()))]),this.requestRender())}),h.initial)]),e.element.load().catch((t=>{r.A.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new o.A("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=(0,M.WD)(this.texture)}get textureSize(){return D}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(null!=i){const e=i instanceof HTMLImageElement,n=i instanceof HTMLVideoElement,r=e?i.naturalWidth:n?i.videoWidth:i.width,s=e?i.naturalHeight:n?i.videoHeight:i.height;if(this._updatePerspectiveTransform(r,s),this.texture)n&&(this.texture.setData(i),this.texture.generateMipmap(),"requestVideoFrameCallback"in i?i.requestVideoFrameCallback((()=>this.requestRender())):i.paused||this.requestRender());else{const e=new V.R;if(e.wrapMode=g.pF.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=r,e.height=s,"getFrame"in i){const n=i=>{this.texture?this.texture.setData(i):this.texture=new v.g(t,e,i),this.requestRender()};"animationOptions"in this.elementView.element&&this._handles.add((0,R.ZH)(i,function(e){return e?{type:"CIMAnimatedSymbolProperties",...e,playAnimation:e.playing,repeatType:e.repeatType?O[e.repeatType]:void 0}:{type:"CIMAnimatedSymbolProperties"}}(this.elementView.element.animationOptions),null,n),"play")}else this.texture=new v.g(t,e,i);this.texture.generateMipmap(),n&&("requestVideoFrameCallback"in i?i.requestVideoFrameCallback((()=>this.requestRender())):i.paused||this.requestRender())}}super.beforeRender(e)}_createTransforms(){return null}draw(e,t){this.isReady&&null!=this.texture?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:D,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._indices}):this.requestRender()}updateDrawCoords(e,t,i,n){const{coords:r,bounds:s}=this.elementView;if(null==r||null==s)return;const[o,a,l,h]=r.rings[0],c=this._vertices,{x:d,y:u}=e;c.set([a[0]-d,a[1]-u,o[0]-d,o[1]-u,l[0]-d,l[1]-u,h[0]-d,h[1]-u]);let m=t;if(n){const[e,,t]=s,{worldWidth:i,xBounds:r}=n,[o,a]=r;e<o&&t>o?m=i:t>a&&e<a&&(m=-i)}this.wrapAroundShift=m,this.isWrapAround=0!==m}_updatePerspectiveTransform(e,t){const i=this._vertices;(0,b.O)(q,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),(0,E.hZ)(this.perspectiveTransform,q[6]/q[8]*e,q[7]/q[8]*t)}}var L=i(23717),Z=i(90104),z=i(91196),I=i(91967);let U=class extends I.A{constructor(){super(...arguments),this.tool="transform"}};(0,n._)([(0,c.MZ)()],U.prototype,"tool",void 0),U=(0,n._)([(0,d.$)("esri.views.3d.layers.support.MediaLayerInteractionOptions")],U);const k=e=>{let t=class extends e{constructor(){super(...arguments),this.layer=null,this.interactive=!1,this.interactionOptions=new U,this.selectedElement=null}};return(0,n._)([(0,c.MZ)()],t.prototype,"layer",void 0),(0,n._)([(0,c.MZ)()],t.prototype,"interactive",void 0),(0,n._)([(0,c.MZ)()],t.prototype,"interactionOptions",void 0),(0,n._)([(0,c.MZ)()],t.prototype,"selectedElement",void 0),t=(0,n._)([(0,d.$)("esri.views.layers.MediaLayerView")],t),t};var H=i(27706);let G=class extends((0,Z.e)(k(z.A))){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this._interaction=null,this.layer=null,this.elements=new s.A}initialize(){this.addHandles([(0,h.watch)((()=>[this.interactive,this.suspended]),(async()=>{if(this.interactive&&!this._interaction){const{MediaLayerInteraction:e}=await i.e(88740).then(i.bind(i,88740));this._interaction=new e({view:this.view,layer:this.layer}),this.selectedElement!==this._interaction.selectedElement&&(this._interaction.selectedElement=this.selectedElement),this.interactionOptions!==this._interaction.options&&(this._interaction.options=this.interactionOptions)}this._interaction&&(this._interaction.enabled=!this.suspended&&this.interactive)}),h.syncAndInitial),(0,h.watch)((()=>this.interactionOptions),(e=>{this._interaction&&(this._interaction.options=e)}),h.syncAndInitial),(0,h.watch)((()=>this.selectedElement),(e=>{this._interaction&&(this._interaction.selectedElement=e)}),h.syncAndInitial)])}attach(){this.addAttachHandles([(0,h.on)((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate()})),(0,h.on)((()=>this.layer.effectiveSource),"change",(e=>{let{element:t}=e;return this._elementUpdateHandler(t)}))]),this._overlayContainer=new L.A,this.container.addChild(this._overlayContainer),this._fetchQueue=new w.A({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t),scheduler:this.scheduler,priority:H.W6.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new x.A({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(e){return!0}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e)}async hitTest(e,t){const i=[],n=e.normalize(),r=[n.x,n.y];for(const{elementView:{normalizedCoords:s,element:o}}of this._elementReferences.values())null!=s&&(0,m.t1)(s.rings,r)&&i.push({type:"media",element:o,layer:this.layer,mapPoint:e,sourcePoint:o.toSource(e)});return i.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)))}_acquireTile(e){const t=new N(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[i,n]=e.setElements(t);this._referenceElements(e,i),this._dereferenceElements(e,n),this.requestUpdate()}),(e=>{(0,l.isAbortError)(e)||r.A.getLogger(this).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const i=this.layer.effectiveSource;if(null==i)return[];this.view.featuresTilingScheme.getTileBounds(W,e,!0);const n=new y.A({xmin:W[0],ymin:W[1],xmax:W[2],ymax:W[3],spatialReference:this.view.spatialReference});return i.queryElements(n,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const i of t)this._referenceElement(e,i)}_referenceElement(e,t){(0,a.tE)(this._elementReferences,t.uid,(()=>{const e=new f._({element:t,spatialReference:this.view.spatialReference}),i=new P(e);return this._overlayContainer.addChild(i),this.elements.add(t),this._updatingHandles.addPromise(t.load().catch((e=>{r.A.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new o.A("element-load-error","Element cannot be displayed",{element:t,error:e}))}))),{debugGraphic:null,elementView:e,overlay:i,tiles:new Set}})).tiles.add(e)}_dereferenceElements(e,t){for(const i of t)this._dereferenceElement(e,i)}_dereferenceElement(e,t){const i=this._elementReferences.get(t.uid);i.tiles.delete(e),i.tiles.size||(this._overlayContainer.removeChild(i.overlay),i.overlay.destroy(),i.elementView.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(i.debugGraphic))}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const i=t.elementView.normalizedCoords;if(null==i)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.elementView.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const n=[],r=[];for(const e of this._tileStrategy.tiles){const s=j(this.view.featuresTilingScheme,e,i);t.tiles.has(e)?s||r.push(e):s&&n.push(e)}for(const t of n)this._referenceElement(t,e);for(const t of r)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.elementView.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const i=new f._({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=i)for(const n of this._tileStrategy.tiles)j(this.view.featuresTilingScheme,n,i)&&this._referenceElement(n,e)}};(0,n._)([(0,c.MZ)()],G.prototype,"layer",void 0),(0,n._)([(0,c.MZ)({readOnly:!0})],G.prototype,"elements",void 0),G=(0,n._)([(0,d.$)("esri.views.2d.layers.MediaLayerView2D")],G);const W=(0,u.vt)(),B={xmin:0,ymin:0,xmax:0,ymax:0};function j(e,t,i){return e.getTileBounds(W,t.key,!0),B.xmin=W[0],B.ymin=W[1],B.xmax=W[2],B.ymax=W[3],(0,p.fA)(B,i)}class N{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const n of e)i.has(n)?i.delete(n):t.push(n);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const $=G}}]);
//# sourceMappingURL=82029.bfab03e6.chunk.js.map