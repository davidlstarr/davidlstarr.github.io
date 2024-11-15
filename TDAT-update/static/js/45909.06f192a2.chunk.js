/*! For license information please see 45909.06f192a2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[45909],{45909:(e,t,i)=>{i.r(t),i.d(t,{arcgis_charts_box_plot:()=>o});var s=i(1408),a=i(81505),r=i(304);const o=class{constructor(e){(0,s.r)(this,e),this.arcgisRuntimeError=(0,s.c)(this,"arcgisRuntimeError",7),this.arcgisDataProcessError=(0,s.c)(this,"arcgisDataProcessError",7),this.arcgisDataProcessComplete=(0,s.c)(this,"arcgisDataProcessComplete",7),this.arcgisLegendItemVisibilityChange=(0,s.c)(this,"arcgisLegendItemVisibilityChange",7),this.arcgisUpdateComplete=(0,s.c)(this,"arcgisUpdateComplete",7),this.arcgisBadDataWarningRaise=(0,s.c)(this,"arcgisBadDataWarningRaise",7),this.arcgisSeriesColorChange=(0,s.c)(this,"arcgisSeriesColorChange",7),this.arcgisAxesMinMaxChange=(0,s.c)(this,"arcgisAxesMinMaxChange",7),this.arcgisSelectionComplete=(0,s.c)(this,"arcgisSelectionComplete",7),this.arcgisNoRenderPropChange=(0,s.c)(this,"arcgisNoRenderPropChange",7),this.arcgisSeriesOrder=(0,s.c)(this,"arcgisSeriesOrder",7),this.skipNextUpdate=!1,this.noRenderProps=["rotation","legendPosition","legendVisibility","view"],this.dataUpdateNeededProps=["forceDataUpdate","runtimeDataFilters","returnFeaturesExtent"],this.updatedProps=new Set,this.config=void 0,this.rotation=void 0,this.actionMode=void 0,this.cursorRange=void 0,this.legendPosition=void 0,this.legendVisibility=void 0,this.hideEmptySeries=void 0,this.view=void 0,this.layer=void 0,this.selectionData=void 0,this.returnSelectionOIDs=void 0,this.returnSelectionIndexes=void 0,this.returnFeaturesExtent=void 0,this.filterBySelection=void 0,this.disableInteractions=void 0,this.queueChartCreation=void 0,this.useAnimatedCharts=void 0,this.hideLicenceWatermark=void 0,this.enableResponsiveFeatures=void 0,this.autoDisposeChart=void 0,this.placeholder=void 0,this.selectionTheme=void 0,this.chartLimits=void 0,this.tooltipFormatter=void 0,this.dataLabelFormatter=void 0,this.guideTooltipFormatter=void 0,this.xAxisLabelFormatter=void 0,this.yAxisLabelFormatter=void 0,this.messageOptions=void 0,this.disableTogglingLegendItems=void 0,this.hideLoaderAnimation=void 0,this.runtimeDataFilters=void 0,this.usePopupTemplateFieldsInfo=void 0,this.layerFilterChangePolicy=r.A.Refresh,this.layerRendererChangePolicy=r.E.Refresh,this.ignoreViewExtent=void 0,this.updateSplitBySeries=void 0,this.showNotifyPanel=!1}handleChartOutputDataChange(e){this.arcgisDataProcessComplete.emit(e.detail)}handleLegendItemVisibilityChanged(e){this.arcgisLegendItemVisibilityChange.emit(e.detail)}handleUpdateCompleted(e){this.arcgisUpdateComplete.emit(e.detail)}handleBadDataWarningRaise(e){this.arcgisBadDataWarningRaise.emit(e.detail)}handleSeriesColorsChange(e){this.arcgisSeriesColorChange.emit(e.detail)}handleSelection(e){this.arcgisSelectionComplete.emit(e.detail)}handleTooManySelectedElements(){this.notifyHeading=this.errorStrings.tooManySelectedElements.title,this.notifyMessage=this.errorStrings.tooManySelectedElements.message,this.notifyOptions={kind:"warning",autoClose:!0,duration:"fast",active:!0},this.showNotifyPanel=!0}handleAlertClosed(e){e.target===this.el&&(this.skipNextUpdate=!0,this.showNotifyPanel=!1)}handleAxesMinMaxChange(e){this.arcgisAxesMinMaxChange.emit(e.detail)}handleSeriesOrder(e){this.arcgisSeriesOrder.emit(e.detail)}async viewChange(e,t){await this.setExtentChangeListener(),void 0!==t&&void 0===e&&await this.refresh()}async layerChange(){await this.addLayerListeners()}rotationChange(e){this.config=(0,r.x)(e,this.config)}legendPositionChange(e){this.config=(0,a.u)(e,this.config)}legendVisibilityChange(e){this.config=(0,a.b)(e,this.config)}filterBySelectionChanged(){this.config=(0,a.r)(this.config)}layerFilterChangePolicyCallBack(e){e!==r.A.Ignore?this.setLayerFilterListener():this.removeLayerFilterListener()}layerRendererChangePolicyCallBack(e){e!==r.E.Ignore?this.setLayerRendererListener():this.removeLayerRendererListener()}async notify(e,t,i){void 0!==this.chart&&this.chart.notify(e,t,i),await Promise.resolve(void 0)}async errorAlert(e){this.notifyHeading=this.errorStrings.errorHeading,this.notifyMessage=e,this.notifyOptions={kind:"danger",autoClose:!0,active:!0},this.showNotifyPanel=!0}async resetZoom(){void 0!==this.chart&&this.chart.resetZoom(),await Promise.resolve(void 0)}async switchSelection(){void 0!==this.chart&&!0!==this.filterBySelection&&await this.chart.switchSelection()}async clearSelection(){void 0!==this.chart&&(this.chart.clearSelection(),!0===this.filterBySelection&&await this.refresh())}async refresh(e){const{updateData:t=!0,resetAxesBounds:i=!1,updateExtent:s=!1}=e??{};this.updatedProps.add(t?"forceDataUpdate":"forceSimpleUpdate"),this.viewExtentUpdated=s,i&&(delete this.config?.axes?.[0]?.minimum,delete this.config?.axes?.[0]?.maximum,delete this.config?.axes?.[1]?.minimum,delete this.config?.axes?.[1]?.maximum),await this.componentDidUpdate(),this.viewExtentUpdated=!1}componentShouldUpdate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const[s,,a]=t;this.updatedProps.add(a);const r=this.noRenderProps.includes(a);r&&this.arcgisNoRenderPropChange.emit({propName:a,value:s});const o=!this.skipNextUpdate&&!r;return this.skipNextUpdate=!1,o}async componentWillLoad(){this.errorStrings=await(0,a.f)(this.el),this.commonStrings=await(0,a.c)(this.el),this.debouncedChartUpdate=(0,a.p)((async()=>{if(void 0!==this.chart){const e=Array.from(this.updatedProps);if(e.length>0){const t=e.some((e=>this.dataUpdateNeededProps.includes(e)));this.updatedProps.clear();const i=(0,a.g)({component:this,dataUpdated:t,viewExtentUpdated:this.viewExtentUpdated});!0===this.updateSplitBySeries?.addMissingSeries&&await(0,a.l)(this,i),await this.chart.update({newChartConfig:this.config,updateOptions:i,updateGlobalOptions:(0,a.d)(this),t9nStrings:{errorStrings:this.errorStrings,commonStrings:this.commonStrings}})}await Promise.resolve(void 0)}}),a.m)}async componentDidLoad(){void 0!==this.chartRef&&await this.createChartInstance()}async componentDidUpdate(){if(void 0===this.chart&&void 0!==this.chartCreationProcessing&&await this.chartCreationProcessing,await(0,r.M)([r.W.BoxPlotSeries,r.W.LineSeries],this.config),void 0===this.config||void 0===this.chart||this.showNotifyPanel)void 0!==this.chart||void 0!==this.chartCreationProcessing||this.showNotifyPanel?void 0!==this.placeholder&&this.notify(this.placeholder):await this.createChartInstance();else try{(0,a.i)(this.config,this.layer)&&await this.debouncedChartUpdate.push({})}catch(e){void 0!==this.chartRef&&(e.name===r.b.ChartDisposed?(this.chart.dispose(),this.chartRef.innerHTML="",await this.createChartInstance(!1)):(e.name===r.b.QueryFeaturesError?this.arcgisDataProcessError.emit(e.details):this.arcgisRuntimeError.emit(e.details??e),this.errorAlert(e?.message)))}void 0!==this.actionBarElement&&(0,r.u)(this.actionBarElement,this.config)}async disconnectedCallback(){this.removeLayerListeners(),this.removeExtentChangeListeners(),void 0!==this.chart&&this.chart.dispose()}render(){const e=this.showNotifyPanel?(0,s.h)(a.k,{heading:this.notifyHeading,message:this.notifyMessage,options:this.notifyOptions}):null,t=this.showNotifyPanel&&"danger"===this.notifyOptions?.kind?"hide":`${r.W.BoxPlotSeries} show`,i=this.showNotifyPanel?"show notifyPanel":"hide";return(0,s.h)(s.H,{key:"85f8f9cff7410c223c31c71a3f4a0b128b3adae2"},(0,s.h)("slot",{key:"8cb3db0f73228dd8ed49faa7c25066240ef7db38",name:r.S.actionBar,onSlotchange:e=>{(0,r.o)(e,r.W.BoxPlotSeries,this.config)},ref:e=>{this.actionBarElement=e}}),(0,s.h)("div",{key:"4685723d03fbc3c517154fdf0ab5469a5d0ed628",class:t,ref:e=>{this.chartRef=e}}),(0,s.h)("div",{key:"c6da22d1ec706b9b40d1a20a4d4ccb6240b941b2",class:i},e))}async addLayerListeners(){this.removeLayerListeners(),this.layerFilterListener=await(0,a.e)({layer:this.layer,component:this}),this.layerRendererListener=await(0,a.h)({layer:this.layer,component:this})}async setLayerFilterListener(){this.removeLayerFilterListener(),this.layerFilterListener=await(0,a.e)({layer:this.layer,component:this})}async setLayerRendererListener(){this.removeLayerRendererListener(),this.layerRendererListener=await(0,a.h)({layer:this.layer,component:this})}async setExtentChangeListener(){this.removeExtentChangeListeners(),this.extentChangeListeners=await(0,a.j)({view:this.view,layer:this.layer,component:this})}removeLayerListeners(){this.removeLayerFilterListener(),this.removeLayerRendererListener()}removeLayerFilterListener(){void 0!==this.layerFilterListener&&this.layerFilterListener.remove()}removeLayerRendererListener(){void 0!==this.layerRendererListener&&this.layerRendererListener.remove()}removeExtentChangeListeners(){void 0!==this.extentChangeListeners&&(this.extentChangeListeners.forEach((e=>e.remove())),this.extentChangeListeners=[])}checkForIncompatibleChartVersion(){const e=this.config?.version;(0,r.j)(e).versionStatus===r.e.Newer&&(this.notifyHeading=this.errorStrings.incompatibleChartVersion.title,this.notifyMessage=(0,r.K)(this.errorStrings.incompatibleChartVersion.message,{chartVersion:e??""}),this.notifyOptions={kind:"warning",autoClose:!0,active:!0},this.showNotifyPanel=!0)}async createChartInstance(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];void 0!==this.chartCreationProcessing&&(await this.chartCreationProcessing,this.chartCreationProcessing=void 0),await(0,r.M)([r.W.BoxPlotSeries,r.W.LineSeries],this.config),this.checkForIncompatibleChartVersion(),this.updatedProps.clear();try{if((0,a.i)(this.config,this.layer)){const e=(0,a.g)({component:this});await(0,a.l)(this,e),this.chartCreationProcessing=(0,a.z)({chartContainer:this.chartRef,chartConfig:this.config,options:e,globalOptions:(0,a.d)(this),t9nStrings:{errorStrings:this.errorStrings,commonStrings:this.commonStrings}})}this.chart=await this.chartCreationProcessing,e&&(await this.addLayerListeners(),await this.setExtentChangeListener())}catch(t){t.name===r.b.QueryFeaturesError?this.arcgisDataProcessError.emit(t.details):this.arcgisRuntimeError.emit(t.details??t),this.errorAlert(t?.message),this.chart?.dispose(),this.chartCreationProcessing=void 0,this.chart=void 0}}static get assetsDirs(){return["assets"]}get el(){return(0,s.a)(this)}static get watchers(){return{view:["viewChange"],layer:["layerChange"],rotation:["rotationChange"],legendPosition:["legendPositionChange"],legendVisibility:["legendVisibilityChange"],filterBySelection:["filterBySelectionChanged"],layerFilterChangePolicy:["layerFilterChangePolicyCallBack"],layerRendererChangePolicy:["layerRendererChangePolicyCallBack"]}}};o.style='.hide{display:none}.am5-modal{width:100%;height:100%;position:absolute;z-index:100000;top:0px;left:0px}.am5-modal-curtain{top:0px;left:0px;width:100%;height:100%;position:absolute;background:rgba(255, 255, 255, 0.5);z-index:100}.am5-modal-wrapper{top:0px;left:0px;width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;white-space:nowrap;background:rgba(255, 255, 255, 0.5);z-index:101}.am5-modal-content{display:inline-block;padding:1.2em;vertical-align:middle;text-align:left;white-space:normal;background:rgb(255, 255, 255);border-radius:4px;box-shadow:rgba(0, 0, 0, 0.45) 0px 0px 36px 0px;color:rgb(0, 0, 0)}.arcgis-charts-modal{box-shadow:none !important}.arcgis-charts-modal-header{background-color:rgba(0, 0, 0, 0.05);font-weight:bold;padding:4px 4px 4px 4px}.show{display:block}.notifyPanel{flex:0 1 auto}.disable-interactions{pointer-events:none}.boxPlotSeries{flex-grow:1;overflow-y:hidden}.boxPlotSeries>div{justify-content:center;align-items:center}.boxPlotSeries .arcgis-charts-modal-inside{padding:1em;padding-left:0}.boxPlotSeries .arcgis-charts-modal-inside ol{padding-left:2em}.boxPlotSeries .arcgis-charts-modal-curtain{width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:2001;background-color:rgb(255, 255, 255);opacity:0.5;opacity:1}.boxPlotSeries .arcgis-charts-modal-content{background:rgba(255, 255, 255, 0.8);color:rgb(0, 0, 0);display:inline-block;position:absolute;top:0px;left:0px;max-width:90%;max-height:90%;overflow:visible;z-index:2002;position:absolute;max-width:90%;max-height:90%;width:auto !important;height:auto !important;margin:auto !important;inset:auto !important;left:auto !important;top:auto !important}.boxPlotSeries .arcgis-charts-modal-header{display:block;width:100%;min-height:1.8em;background:rgba(0, 0, 0, 0.05)}.boxPlotSeries .arcgis-charts-modal-close{display:block;position:absolute;top:0.3em;right:0.3em;background:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ0NS4yIDEwOS4ybC00Mi40LTQyLjRMMjU2IDIxMy42IDEwOS4yIDY2LjhsLTQyLjQgNDIuNEwyMTMuNiAyNTYgNjYuOCA0MDIuOGw0Mi40IDQyLjRMMjU2IDI5OC40bDE0Ni44IDE0Ni44IDQyLjQtNDIuNEwyOTguNCAyNTYiLz48L3N2Zz4=") center center/80% no-repeat rgba(100, 100, 100, 0.1);width:1.2em;height:1.2em;cursor:pointer}.boxPlotSeries .arcgis-charts-modal-title{font-weight:bold;font-size:110%;padding:0.5em 1.2em 0.5em 1em}:host{width:var(--charts-bar-chart-width, var(--arcgis-charts-default-width));height:var(--charts-bar-chart-height, var(--arcgis-charts-default-height));display:flex;flex-direction:row}'}}]);
//# sourceMappingURL=45909.06f192a2.chunk.js.map