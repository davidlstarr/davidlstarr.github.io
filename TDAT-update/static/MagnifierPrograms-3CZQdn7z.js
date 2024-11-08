import{c as b}from"./WGLContainer-1K6UH7eS.js";import{t as yt}from"./CircularArray-CujHzHWW.js";import{al as B,cA as Mt,a8 as x,bz as E,J as _,K as v,M as R,lB as lt,fz as bt,aq as pt,ci as gt,ft as xt,hM as Tt,dp as vt,lC as J,aD as K,fn as ft,lD as H,lE as $t,cj as St,fp as nt,lF as Ct,iW as Dt,lG as Vt,fl as k,lH as zt,lI as ot,lJ as Et,lK as Rt,aS as O,lL as ut}from"./index-CN4ACLGJ.js";import{a as Lt}from"./testSVGPremultipliedAlpha-DMooMpww.js";import{U,N as It,O as At}from"./definitions-Y_v3njP4.js";import{t as Ft}from"./AttributeStore-D5LiaMcM.js";import{e as Pt}from"./ProgramTemplate-DUFwCkd2.js";const ne={shaders:{vertexShader:b("bitBlit/bitBlit.vert"),fragmentShader:b("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])},oe={shaders:{vertexShader:b("stencil/stencil.vert"),fragmentShader:b("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])},ae={shaders:{vertexShader:b("highlight/textured.vert"),fragmentShader:b("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},re={shaders:{vertexShader:b("highlight/textured.vert"),fragmentShader:b("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},w=B("esri-2d-profiler");let he=class{constructor(t,e){if(this._events=new Mt,this._entries=new Map,this._timings=new yt(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!w)return;this._ext=Lt(t.gl,{}),this._debugOutput=e;const i=t.gl;if(!this.enableCommandLogging)return;let s;for(s in i)if(typeof i[s]=="function"){const n=i[s],r=s.includes("draw");i[s]=(...h)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:s,args:h,isDrawCommand:r}),this._currentSummary&&(this._currentSummary.commands++,r&&this._currentSummary.drawCommands++),n.apply(i,h))}}get enableCommandLogging(){return!(typeof w=="object"&&w.disableCommands)}recordContainerStart(t){w&&(this._currentContainer=t)}recordContainerEnd(){w&&(this._currentContainer=null)}recordPassStart(t){w&&(this._currentPass=t,this._initSummary())}recordPassEnd(){w&&(this._currentPass=null,this._emitSummary())}recordBrushStart(t){w&&(this._currentBrush=t)}recordBrushEnd(){w&&(this._currentBrush=null)}recordStart(t){if(w&&this._ext!=null){if(this._entries.has(t)){const i=this._entries.get(t),s=this._ext.resultAvailable(i.query),n=this._ext.disjoint();if(s&&!n){const r=this._ext.getResult(i.query)/1e6;let h=0;if(this._timings.enqueue(r)!=null){const l=this._timings.entries,c=l.length;let p=0;for(const m of l)p+=m;h=p/c}const o=r.toFixed(2),u=h?h.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${t}, ${o} ms (${u} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(i.summaries),console.log("Commands: ",i.commands),console.groupEnd()):console.log(`Frame report for ${t}, ${o} ms (${u} last 10 avg)`),this._debugOutput.innerHTML=`${o} (${u})`}for(const r of i.handles)r.remove();this._ext.deleteQuery(i.query),this._entries.delete(t)}const e={name:t,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(e.handles.push(this._events.on("command",i=>{e.commandsLen++,e.commands.push(i),i.isDrawCommand&&e.drawCommands++})),e.handles.push(this._events.on("summary",i=>{e.summaries.push(i)}))),this._ext.beginTimeElapsed(e.query),this._entries.set(t,e)}}recordEnd(t){w&&this._ext!=null&&this._entries.has(t)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}};const y=1,j=0,Z=1,N=2;let Zt=class{constructor(t,e,i){this._width=t*i,this._height=e*i,this._pixelRatio=i;const s=Math.ceil(this._width/y),n=Math.ceil(this._height/y);this._cols=s,this._rows=n,this._cells=Ft.create(s*n)}insertMetrics(t){this._markMetrics(t)}hasCollision(t){let e=0;for(const{computedX:i,computedY:s,width:n,height:r}of t.bounds){const h=(n+U)*this._pixelRatio,o=(r+U)*this._pixelRatio;switch(this._collide(i,s,h,o)){case N:return N;case Z:e++}}return e===t.bounds.length?Z:j}getCellId(t,e){return t+e*this._cols}has(t){return this._cells.has(t)}hasRange(t,e){return this._cells.hasRange(t,e)}set(t){this._cells.set(t)}setRange(t,e){this._cells.setRange(t,e)}_collide(t,e,i,s){const n=t-i/2,r=e-s/2,h=n+i,o=r+s;if(h<0||o<0||n>this._width||r>this._height)return Z;const u=x(Math.floor(n/y),0,this._cols),l=x(Math.floor(r/y),0,this._rows),c=x(Math.ceil(h/y),0,this._cols),p=x(Math.ceil(o/y),0,this._rows);for(let m=l;m<=p;m++)for(let d=u;d<=c;d++){const g=this.getCellId(d,m);if(this.has(g))return N}return j}_mark(t,e,i,s,n){const r=t-i/2,h=e-s/2,o=r+i,u=h+s,l=x(Math.floor(r/y),0,this._cols),c=x(Math.floor(h/y),0,this._rows),p=x(Math.ceil(o/y),0,this._cols),m=x(Math.ceil(u/y),0,this._rows);for(let d=c;d<=m;d++)for(let g=l;g<=p;g++){const q=this.getCellId(g,d);this.set(q)}return!1}_markMetrics(t){for(const{computedX:e,computedY:i,width:s,height:n}of t.bounds){const r=(s+U)*this._pixelRatio,h=(n+U)*this._pixelRatio;this._mark(e,i,r,h,t.entityTexel)}}};const L=254,G=255,I=0;function C(a,t){const e=a.children.slice();e.sort((i,s)=>i.tileAge-s.tileAge),e.forEach(i=>{i.labelMetrics!=null&&i.isReady&&t(i,i.labelMetrics)})}function mt(a,t){return(!a.minScale||a.minScale>=t)&&(!a.maxScale||a.maxScale<=t)}let Nt=class{run(t,e,i,s){var r;const n=[];for(let h=t.length-1;h>=0;h--){const o=t[h];(r=o.labelingCollisionInfos)!=null&&r.length&&n.push(...o.labelingCollisionInfos)}B("esri-2d-update-debug")&&n.length&&console.debug("CollisionEngine.run"),this._transformMetrics(n),this._runCollision(n,e,i,s);for(const h of n)h.container.requestRender()}_runCollision(t,e,i,s){const[n,r]=e.state.size,h=new Zt(n,r,e.pixelRatio);for(const{container:o,deconflictionEnabled:u,visible:l}of t){const c=o.attributeView;u?l?(this._prepare(o),this._collideVisible(h,o,i,s),this._collideInvisible(h,o)):C(o,(p,m)=>{for(const d of m)c.setLabelMinZoom(d.entityTexel,G)}):C(o,(p,m)=>{for(const d of m)mt(d,i)?(c.setLabelMinZoom(d.entityTexel,I),l&&h.insertMetrics(d)):c.setLabelMinZoom(d.entityTexel,L)})}}_isFiltered(t,e,i){const s=e.getFilterFlags(t),n=!i.hasFilter||!!(s&It),r=i.featureEffect==null||i.featureEffect.excludedLabelsVisible||!!(s&At);return!(n&&r)}_prepare(t){const e=t.attributeView,i=new Set;C(t,(s,n)=>{for(const r of n){const h=r.entityTexel;if(!i.has(h)){if(i.add(h),this._isFiltered(h,e,t.layerView)){e.setLabelMinZoom(h,L);continue}e.getLabelMinZoom(h)!==I?e.setLabelMinZoom(h,G):e.setLabelMinZoom(h,I)}}})}_collideVisible(t,e,i,s){const n=e.attributeView,r=new Set;C(e,(h,o)=>{for(let u=0;u<o.length;u++){const l=o[u].entityTexel;if(r.has(l))continue;if(h.key.level!==s){n.setLabelMinZoom(l,L),r.add(l);continue}if(!mt(o[u],i)){n.setLabelMinZoom(l,L),r.add(l);continue}if(n.getLabelMinZoom(l)!==0){r.add(l);continue}let c=!1,p=!0;const m=u;let d=u;for(;d<o.length;d++){const g=o[d];if(g.entityTexel!==l)break;if(!c)switch(t.hasCollision(g)){case Z:break;case N:c=!0,p=!1;break;case j:p=!1}}if(!c)for(let g=m;g<d;g++)t.insertMetrics(o[g]);u=d-1,p||(r.add(l),n.setLabelMinZoom(l,c?L:I))}})}_collideInvisible(t,e){const i=e.attributeView,s=new Set;C(e,(n,r)=>{for(let h=0;h<r.length;h++){const o=r[h].entityTexel;if(s.has(o))continue;if(i.getLabelMinZoom(o)!==G){s.add(o);continue}let u=!1,l=!0;const c=h;let p=h;for(;p<r.length;p++){const m=r[p];if(m.entityTexel!==o)break;if(!u)switch(t.hasCollision(m)){case Z:break;case N:u=!0,l=!1;break;case j:l=!1}}if(!u)for(let m=c;m<p;m++)t.insertMetrics(r[m]);h=p-1,l||(s.add(o),i.setLabelMinZoom(o,u?G:I))}})}_transformMetrics(t){for(const{container:e,geometryType:i,vvEvaluators:s}of t)C(e,(n,r)=>{var l;const h=e.attributeView,o=n.transforms.labelMat2d;o[4]=Math.round(o[4]),o[5]=Math.round(o[5]);const u=i==="polyline";for(const c of r){const{entityTexel:p,anchorX:m,anchorY:d}=c;let g=((l=c.referenceBounds)==null?void 0:l.size)??0;const q=s[0];if(q!=null){const f=q(h.getVVSize(p));g=isNaN(f)||f==null||f===1/0?g:f}const rt=c.directionX*(g/2),ht=c.directionY*(g/2);for(const f of c.bounds){let Q=m,W=d;if(u){let $=Q+f.x+rt,S=W+f.y+ht;$=o[0]*$+o[2]*S+o[4],S=o[1]*$+o[3]*S+o[5],f.computedX=Math.floor($),f.computedY=Math.floor(S)}else{Q=o[0]*m+o[2]*d+o[4],W=o[1]*m+o[3]*d+o[5];const $=Q+f.x+rt,S=W+f.y+ht;f.computedX=$,f.computedY=S}}}})}};const kt=32;let A=class extends E{constructor(t){super(t),this._lastUpdate=0,this.collisionEngine=new Nt,this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}get updating(){return B("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(t){const e=performance.now();e-this._lastUpdate>=kt?(this._lastUpdate=e,this.doUpdate(t)):this.requestUpdate()}viewChange(){this.requestUpdate()}requestUpdate(){var t;this.updateRequested||(this.updateRequested=!0,(t=this.view)==null||t.requestUpdate())}processUpdate(t){this.updateRequested&&(this.updateRequested=!1,this.update(t))}doUpdate(t){const e=this.view;if(e)try{const i=t.state.scale,s=e.featuresTilingScheme.getClosestInfoForScale(i).level;this.collisionEngine.run(e.allLayerViews.items,t,i,s)}catch{}}};_([v()],A.prototype,"updateRequested",void 0),_([v()],A.prototype,"updating",null),_([v()],A.prototype,"view",void 0),A=_([R("esri.views.2d.LabelManager")],A);const X="esri-zoom-box",Y={container:`${X}__container`,overlay:`${X}__overlay`,background:`${X}__overlay-background`,box:`${X}__outline`},tt={zoom:"Shift",counter:"Control"};let F=class extends E{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this.removeAllHandles(),this._destroyOverlay(),this._set("view",t),t&&this.addHandles([t.on("drag",[tt.zoom],e=>this._handleDrag(e,1),lt.INTERNAL),t.on("drag",[tt.zoom,tt.counter],e=>this._handleDrag(e,-1),lt.INTERNAL)])}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,i,s){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=s,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,s,n){const r=this.view,h=r.toMap(bt(t+.5*i,e+.5*s));let o=Math.max(i/r.width,s/r.height);n===-1&&(o=1/o),this._destroyOverlay(),this.navigation.end(),r.goTo({center:h,scale:r.scale*o},{animationMode:"always",duration:pt(B("mapview-essential-goto-duration"))})}_updateBox(t,e,i,s){const n=this._boxShape;n.setAttributeNS(null,"x",""+t),n.setAttributeNS(null,"y",""+e),n.setAttributeNS(null,"width",""+i),n.setAttributeNS(null,"height",""+s),n.setAttributeNS(null,"class",Y.box)}_updateBackground(t,e,i,s){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,s,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=Y.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",Y.background);const s=document.createElementNS("http://www.w3.org/2000/svg","rect"),n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),n.setAttributeNS(null,"class",Y.overlay),n.appendChild(i),n.appendChild(s),this._container.appendChild(n),this._backgroundShape=i,this._boxShape=s,this._overlay=n}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,i,s,n,r){const h=t+i,o=e+s;return"M 0 0 L "+n+" 0 L "+n+" "+r+" L 0 "+r+" ZM "+t+" "+e+" L "+t+" "+o+" L "+h+" "+o+" L "+h+" "+e+" Z"}_handleDrag(t,e){const i=t.x,s=t.y,n=t.origin.x,r=t.origin.y;let h,o,u,l;switch(i>n?(h=n,u=i-n):(h=i,u=n-i),s>r?(o=r,l=s-r):(o=s,l=r-s),t.action){case"start":this._start();break;case"update":this._update(h,o,u,l);break;case"end":this._end(h,o,u,l,e)}t.stopPropagation()}_redraw(){if(!this._rafId||(this._rafId=null,!this._overlay))return;const{x:t,y:e,width:i,height:s}=this._box;this._updateBox(t,e,i,s),this._updateBackground(t,e,i,s),this._rafId=requestAnimationFrame(this._redraw)}};_([v()],F.prototype,"navigation",void 0),_([v()],F.prototype,"view",null),F=_([R("esri.views.2d.navigation.ZoomBox")],F);const Bt=F;let T=class{constructor(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0}update(t){if(this.hasLastValue()){const e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}hasLastValue(){return this.lastValue!==void 0}hasFilteredDelta(){return this.filteredDelta!==void 0}computeDelta(t){return this.lastValue===void 0?NaN:t-this.lastValue}_updateDelta(t){this.filteredDelta!==void 0?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t}},at=class{constructor(t,e,i){this._initialVelocity=t,this._stopVelocity=e,this._friction=i,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,e){const i=this.value(t);return this.value(t+e)-i}valueFromInitialVelocity(t,e){e=Math.min(e,this.duration);const i=1-this.friction;return t*(i**e-1)/Math.log(i)}};class qt extends at{constructor(t,e,i,s,n){super(t,e,i),this._sceneVelocity=s,this.direction=n}value(t){return super.valueFromInitialVelocity(this._sceneVelocity,t)}}class Ot{constructor(t=300,e=12,i=.84){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this.enabled=!0,this._time=new T(.6),this._screen=[new T(.4),new T(.4)],this._scene=[new T(.6),new T(.6),new T(.6)],this._tmpDirection=gt()}add(t,e,i){if(this.enabled){if(this._time.hasLastValue()&&this._time.computeDelta(i)<.015)return;this._screen[0].update(t[0]),this._screen[1].update(t[1]),this._scene[0].update(e[0]),this._scene[1].update(e[1]),this._scene[2].update(e[2]),this._time.update(i)}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset()}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null;const t=this._screen[0].filteredDelta,e=this._screen[1].filteredDelta,i=t==null||e==null?0:Math.sqrt(t*t+e*e),s=this._time.filteredDelta,n=s==null||i==null?0:i/s;return Math.abs(n)<this._minimumInitialVelocity?null:this.createMomentum(n,this._stopVelocity,this._friction)}createMomentum(t,e,i){xt(this._tmpDirection,this._scene[0].filteredDelta??0,this._scene[1].filteredDelta??0,this._scene[2].filteredDelta??0);const s=Tt(this._tmpDirection);s>0&&vt(this._tmpDirection,this._tmpDirection,1/s);const n=this._time.filteredDelta;return new qt(t,e,i,n==null?0:s/n,this._tmpDirection)}}let V=class extends E{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new Ot(500,6,.92),this.momentum=null,this.tmpMomentum=gt(),this.momentumFinished=!1,this.viewpoint=new J({targetGeometry:new K,scale:0,rotation:0}),this._previousDrag=null,ft(()=>this.momentumFinished,()=>this.navigation.stop())}begin(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this._previousDrag=e}update(t,e){this.addToEstimator(e);let i=e.center.x,s=e.center.y;const n=this._previousDrag;i=n?n.center.x-i:-i,s=n?s-n.center.y:s,t.viewpoint=H(this.viewpoint,t.viewpoint,[i||0,s||0]),this._previousDrag=e}end(t,e){this.addToEstimator(e);const i=t.navigation.effectiveMomentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this._previousDrag=null,this.navigation.end()}addToEstimator(t){const e=t.center.x,i=t.center.y,s=$t(-e,i),n=St(-e,i,0);this.momentumEstimator.add(s,n,.001*t.timestamp)}onAnimationUpdate(t){var e;(e=this.navigation.animationManager)==null||e.animateContinuous(t.viewpoint,(i,s)=>{const{momentum:n,animationTime:r,tmpMomentum:h}=this,o=.001*s;if(!(this.momentumFinished=!n||n.isFinished(r))){const u=n.valueDelta(r,o);vt(h,n.direction,u),H(i,i,h),t.constraints.constrainByGeometry(i)}this.animationTime+=o})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};_([v()],V.prototype,"momentumFinished",void 0),_([v()],V.prototype,"viewpoint",void 0),_([v()],V.prototype,"navigation",void 0),V=_([R("esri.views.2d.navigation.actions.Pan")],V);const Ut=V;let wt=class{constructor(t=2.5,e=.01,i=.95,s=12){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this._maxVelocity=s,this.enabled=!0,this.value=new T(.8),this.time=new T(.3)}add(t,e){if(this.enabled&&e!=null){if(this.time.hasLastValue()){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta()){const i=this.value.computeDelta(t);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let t=this.value.filteredDelta/this.time.filteredDelta;return t=x(t,-this._maxVelocity,this._maxVelocity),Math.abs(t)<this._minimumInitialVelocity?null:this.createMomentum(t,this._stopVelocity,this._friction)}createMomentum(t,e,i){return new at(t,e,i)}},Gt=class extends wt{constructor(t=3,e=.01,i=.95,s=12){super(t,e,i,s)}add(t,e){const i=this.value.lastValue;if(i!=null){let s=t-i;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;t=i+s}super.add(t,e)}};class Xt extends at{constructor(t,e,i){super(t,e,i)}value(t){const e=super.value(t);return Math.exp(e)}valueDelta(t,e){const i=super.value(t),s=super.value(t+e)-i;return Math.exp(s)}}class Yt extends wt{constructor(t=2.5,e=.01,i=.95,s=12){super(t,e,i,s)}add(t,e){super.add(Math.log(t),e)}createMomentum(t,e,i){return new Xt(t,e,i)}}let z=class extends E{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new Gt(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new Yt,this._zoomOnly=null,this.viewpoint=new J({targetGeometry:new K,scale:0,rotation:0}),this.zoomMomentum=null,this.rotateMomentum=null,this.addHandles(ft(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(t,e){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=e.angle,this._previousRadius=this._startRadius=e.radius,this._previousCenter=e.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,e.timestamp),this.addToZoomEstimator(e,1)}update(t,e){this._updateTimestamp===null&&(this._updateTimestamp=e.timestamp);const i=e.angle,s=e.radius,n=e.center,r=Math.abs(180*(i-this._startAngle)/Math.PI),h=Math.abs(s-this._startRadius),o=this._startRadius/s;if(this._previousRadius&&this._previousCenter){const u=s/this._previousRadius;let l=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=l>=0?1:-1,this._zoomDirection=u>=1?1:-1,t.constraints.rotationEnabled?(this._zoomOnly===null&&e.timestamp-this._updateTimestamp>200&&(this._zoomOnly=h-r>0),this._zoomOnly===null||this._zoomOnly?l=0:this.addToRotateEstimator(i-this._startAngle,e.timestamp)):l=0,this.addToZoomEstimator(e,o),this.navigation.setViewpoint([n.x,n.y],1/u,l,[this._previousCenter.x-n.x,n.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=n}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,e){this._rotationMomentumEstimator.add(t,.001*e)}addToZoomEstimator(t,e){this._zoomMomentumEstimator.add(e,.001*t.timestamp)}canZoomIn(t){const e=t.scale,i=t.constraints.effectiveMaxScale;return i===0||e>i}canZoomOut(t){const e=t.scale,i=t.constraints.effectiveMinScale;return i===0||e<i}onAnimationUpdate(t){var e;(e=this.navigation.animationManager)==null||e.animateContinuous(t.viewpoint,(i,s)=>{const n=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,r=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),h=n||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),o=.001*s;if(this._momentumFinished=r&&h,!this._momentumFinished){const u=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,o))*this._rotationDirection*180/Math.PI:0;let l=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,o)):1;const c=k(),p=k();if(this._previousCenter){nt(c,this._previousCenter.x,this._previousCenter.y),Ct(p,t.size,t.padding),Dt(c,c,p);const{constraints:m,scale:d}=t,g=d*l;l<1&&!m.canZoomInTo(g)?(l=d/m.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):l>1&&!m.canZoomOutTo(g)&&(l=d/m.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Vt(i,t.viewpoint,l,u,c,t.size),t.constraints.constrainByGeometry(i)}}this._animationTime+=o})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};_([v()],z.prototype,"_momentumFinished",void 0),_([v()],z.prototype,"viewpoint",void 0),_([v()],z.prototype,"navigation",void 0),z=_([R("esri.views.2d.navigation.actions.Pinch")],z);const Ht=z,et=k(),ct=k();let P=class extends E{constructor(a){super(a),this._previousCenter=k(),this.viewpoint=new J({targetGeometry:new K,scale:0,rotation:0})}begin(a,t){this.navigation.begin(),nt(this._previousCenter,t.center.x,t.center.y)}update(a,t){const{state:{size:e,padding:i}}=a;nt(et,t.center.x,t.center.y),zt(ct,e,i),a.viewpoint=ot(this.viewpoint,a.state.paddedViewState.viewpoint,Et(ct,this._previousCenter,et)),Rt(this._previousCenter,et)}end(){this.navigation.end()}};_([v()],P.prototype,"viewpoint",void 0),_([v()],P.prototype,"navigation",void 0),P=_([R("esri.views.2d.navigation.actions.Rotate")],P);const jt=P,D=10,dt=1,it=new J({targetGeometry:new K}),st=[0,0],_t=250;let M=class extends E{constructor(a){super(a),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new Ut({navigation:this}),this.rotate=new jt({navigation:this}),this.pinch=new Ht({navigation:this}),this.zoomBox=new Bt({view:this.view,navigation:this})}destroy(){this.pan=O(this.pan),this.rotate=O(this.rotate),this.pinch=O(this.pinch),this.zoomBox=O(this.zoomBox),this.animationManager=null}begin(){this.stop(),this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(_t)}async zoom(a,t=this._getDefaultAnchor()){if(this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return a<1?this.zoomIn(t):this.zoomOut(t);this.setViewpoint(t,a,0,[0,0])}async zoomIn(a){const t=this.view,e=t.constraints.snapToNextScale(t.scale);return this._zoomToScale(e,a)}async zoomOut(a){const t=this.view,e=t.constraints.snapToPreviousScale(t.scale);return this._zoomToScale(e,a)}setViewpoint(a,t,e,i){this.begin(),this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,a,t,e,i),this.end()}setViewpointImmediate(a,t=0,e=[0,0],i=this._getDefaultAnchor()){this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,i,a,t,e)}continuousRotateClockwise(){var t;const a=this.view.viewpoint;(t=this.animationManager)==null||t.animateContinuous(a,e=>{ot(e,e,-dt)})}continuousRotateCounterclockwise(){var t;const a=this.view.viewpoint;(t=this.animationManager)==null||t.animateContinuous(a,e=>{ot(e,e,dt)})}resetRotation(){this.view.constraints.rotationEnabled&&(this.view.rotation=0)}continuousPanLeft(){this._continuousPan([-D,0])}continuousPanRight(){this._continuousPan([D,0])}continuousPanUp(){this._continuousPan([0,D])}continuousPanDown(){this._continuousPan([0,-D])}continuousPanVector({x:a,y:t}){this._continuousPan([a*D,t*D])}stop(){var a;this.pan.stopMomentumNavigation(),(a=this.animationManager)==null||a.stop(),this.end(),this._endTimer!==null&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(a){var e;const t=this.view.viewpoint;(e=this.animationManager)==null||e.animateContinuous(t,i=>{H(i,i,a),this.view.constraints.constrainByGeometry(i)})}_startTimer(a){return this._endTimer!==null||(this._endTimer=setTimeout(()=>{this._endTimer=null;const t=performance.now()-(this._lastEventTimestamp??0);t<_t?this._endTimer=this._startTimer(t):this._set("interacting",!1)},a)),this._endTimer}_getDefaultAnchor(){const{size:a,padding:{left:t,right:e,top:i,bottom:s}}=this.view;return st[0]=.5*(a[0]-e+t),st[1]=.5*(a[1]-s+i),st}async _zoomToScale(a,t=this._getDefaultAnchor()){const{view:e}=this,{constraints:i,scale:s,viewpoint:n,size:r,padding:h}=e,o=i.canZoomInTo(a),u=i.canZoomOutTo(a);if(!(a<s&&!o||a>s&&!u))return ut(it,n,a/s,0,t,r,h),i.constrainByGeometry(it),e.goTo(it,{animate:!0,animationMode:"always",duration:pt(B("mapview-essential-goto-duration")),pickClosestTarget:!1})}_scaleRotateTranslateViewpoint(a,t,e,i,s){const{view:n}=this,{size:r,padding:h,constraints:o,scale:u,viewpoint:l}=n,c=u*e,p=o.canZoomInTo(c),m=o.canZoomOutTo(c);return(e<1&&!p||e>1&&!m)&&(e=1),H(l,l,s),ut(a,l,e,i,t,r,h),o.constrainByGeometry(a)}};_([v()],M.prototype,"animationManager",void 0),_([v({type:Boolean,readOnly:!0})],M.prototype,"interacting",void 0),_([v()],M.prototype,"pan",void 0),_([v()],M.prototype,"pinch",void 0),_([v()],M.prototype,"rotate",void 0),_([v()],M.prototype,"view",void 0),_([v()],M.prototype,"zoomBox",void 0),M=_([R("esri.views.2d.navigation.MapViewNavigation")],M);const ye=M,Jt={shaders:{vertexShader:b("magnifier/magnifier.vert"),fragmentShader:b("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function Me(a){return Pt(a,Jt)}export{re as a,Me as b,Jt as c,A as d,ne as e,he as n,oe as r,ae as t,ye as y};
