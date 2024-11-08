import{aS as o,aT as g,aO as m,aU as n,B as a,J as p,K as l,M as c}from"./index-CN4ACLGJ.js";import{t as d}from"./highlightReasons-CbqG0WV4.js";import{f as u,y as w}from"./LayerView-gty9mKdc.js";import{t as y}from"./GraphicContainer-C_3XAdjd.js";import{V}from"./GraphicsView2D-LySABWjs.js";import{e as f}from"./HighlightCounter-BnnmbgyO.js";import"./Container-CfcOBiSO.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-Bfi7Qxg7.js";import"./AGraphicContainer-Depcd788.js";import"./TechniqueInstance-DqViwwXf.js";import"./UpdateTracking2D-DF2R2zoI.js";import"./BindType-BmZEZMMh.js";import"./Util-BwG3tAg0.js";import"./Program-D9LJIvzC.js";import"./LabelMetric-D5-8oTAH.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-B77QRulE.js";import"./TileContainer-nMI-RLzi.js";import"./WGLContainer-1K6UH7eS.js";import"./ProgramTemplate-DUFwCkd2.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-Bp5qg9S_.js";import"./config-MDUrh2eL.js";import"./earcut-ATLbUfOW.js";import"./featureConversionUtils-6C_rWoY8.js";import"./FeatureCommandQueue-C4ZPd1Hm.js";import"./CIMSymbolHelper-ejsLkTHI.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-CMNdT_NB.js";import"./GeometryUtils-DNrMVs5Q.js";import"./Rect-CUzevAry.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-D5LiaMcM.js";import"./TimeOnly-CyizEJrv.js";import"./timeSupport-CCz1v6a8.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-Bhn7l-fx.js";let s=class extends u(w){constructor(){super(...arguments),this._highlightCounter=new f}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new y(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="highlight"){let e;typeof i=="number"?e=[i]:i instanceof g?e=[i.uid]:Array.isArray(i)&&i.length>0?e=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(e=i.map(h=>h&&h.uid).toArray());const r=e==null?void 0:e.filter(n);return r!=null&&r.length?(this._addHighlight(r,t),a(()=>this._removeHighlight(r,t))):a()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight()}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight()}_updateHighlight(){var t;const i=[];for(const e of this._highlightCounter.ids()){const r=this._highlightCounter.getHighlightReason(e),h=d(r);i.push({objectId:e,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};p([l()],s.prototype,"graphicsView",void 0),s=p([c("esri.views.2d.layers.GraphicsLayerView2D")],s);const si=s;export{si as default};