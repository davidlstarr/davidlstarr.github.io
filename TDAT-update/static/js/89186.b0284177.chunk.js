"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[89186],{89186:(t,e,i)=>{i.r(e),i.d(e,{default:()=>f});var s=i(35143),h=i(39356),r=i(18690),a=i(94643),n=i(54901),g=i(30726),d=i(46053),o=(i(81806),i(76460),i(85842)),l=i(90104),c=i(31394),p=i(43321),u=i(22299),w=i(91196);let _=class extends((0,l.e)(w.A)){constructor(){super(...arguments),this._highlightCounter=new u.t}attach(){this.graphicsView=new p.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new c.A(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",(t=>{t&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())}))]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=(0,g.pR)(this.graphicsView)}async hitTest(t){return this.graphicsView?this.graphicsView.hitTest(t).map((e=>({type:"graphic",graphic:e,mapPoint:t,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(t){this.graphicsView.processUpdate(t)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(t){let e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";"number"==typeof t?e=[t]:t instanceof h.default?e=[t.uid]:Array.isArray(t)&&t.length>0?e="number"==typeof t[0]?t:t.map((t=>t&&t.uid)):a.A.isCollection(t)&&t.length>0&&(e=t.map((t=>t&&t.uid)).toArray());const s=e?.filter(r.Ru);return s?.length?(this._addHighlight(s,i),(0,n.hA)((()=>this._removeHighlight(s,i)))):(0,n.hA)()}_addHighlight(t,e){this._highlightCounter.addGroup(t,e),this._updateHighlights()}_removeHighlight(t,e){this._highlightCounter.deleteGroup(t,e),this._updateHighlights()}_updateHighlights(){const t=[];for(const e of this._highlightCounter.ids()){const i=this._highlightCounter.getHighlightGroups(e),s=this._getHighlightBits(i);t.push({objectId:e,highlightFlags:s})}this.graphicsView?.setHighlight(t)}};(0,s._)([(0,d.MZ)()],_.prototype,"graphicsView",void 0),_=(0,s._)([(0,o.$)("esri.views.2d.layers.GraphicsLayerView2D")],_);const f=_},31394:(t,e,i)=>{i.d(e,{A:()=>a});var s=i(61551),h=i(8995),r=i(13692);class a extends h.f{renderChildren(t){for(const e of this.children)e.setTransform(t.state);if(super.renderChildren(t),this._updateAttributeView(),this.children.some((t=>t.hasData))){switch(t.drawPhase){case s.S5.MAP:this._renderChildren(t,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(t)}this._boundsRenderer&&this._boundsRenderer.doRender(t)}}_renderHighlight(t){(0,r.lB)(t,!1,(t=>{this._renderChildren(t,s.RI.Highlight)}))}}},22299:(t,e,i)=>{i.d(e,{t:()=>h});const s=new Set;class h{constructor(){this._idToCounters=new Map}get empty(){return 0===this._idToCounters.size}addGroup(t,e){for(const i of t){let t=this._idToCounters.get(i);t||(t=new Map,this._idToCounters.set(i,t)),t.set(e,(t.get(e)||0)+1)}}deleteGroup(t,e){for(const i of t){const t=this._idToCounters.get(i);if(!t)continue;let s=t.get(e);if(null==s)return;s--,s>0?t.set(e,s):t.delete(e),0===t.size&&this._idToCounters.delete(i)}}getHighlightGroups(t){const e=this._idToCounters.get(t);if(!e)return s;const i=new Set;for(const[s,h]of e)h>0&&i.add(s);return i}ids(){return this._idToCounters.keys()}}}}]);
//# sourceMappingURL=89186.b0284177.chunk.js.map