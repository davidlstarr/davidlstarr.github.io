/*! For license information please see 37747.ecc0e43d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[37747],{37747:(e,t,i)=>{i.r(t),i.d(t,{arcgis_charts_scatter_plot:()=>o});var s=i(1408),a=i(81505),r=i(304);const o=class{constructor(e){(0,s.r)(this,e),this.arcgisRuntimeError=(0,s.c)(this,"arcgisRuntimeError",7),this.arcgisDataProcessError=(0,s.c)(this,"arcgisDataProcessError",7),this.arcgisDataProcessComplete=(0,s.c)(this,"arcgisDataProcessComplete",7),this.arcgisLegendItemVisibilityChange=(0,s.c)(this,"arcgisLegendItemVisibilityChange",7),this.arcgisUpdateComplete=(0,s.c)(this,"arcgisUpdateComplete",7),this.arcgisBadDataWarningRaise=(0,s.c)(this,"arcgisBadDataWarningRaise",7),this.arcgisSeriesColorChange=(0,s.c)(this,"arcgisSeriesColorChange",7),this.arcgisAxesMinMaxChange=(0,s.c)(this,"arcgisAxesMinMaxChange",7),this.arcgisSelectionComplete=(0,s.c)(this,"arcgisSelectionComplete",7),this.skipNextUpdate=!1,this.noRenderProps=["disableInteractions","legendPosition","legendVisibility","view"],this.dataUpdateNeededProps=["forceDataUpdate","runtimeDataFilters"],this.updatedProps=new Set,this.config=void 0,this.actionMode=void 0,this.cursorRange=void 0,this.legendPosition=void 0,this.legendVisibility=void 0,this.view=void 0,this.layer=void 0,this.selectionData=void 0,this.returnSelectionOIDs=void 0,this.returnSelectionIndexes=void 0,this.filterBySelection=void 0,this.disableInteractions=void 0,this.disableTogglingLegendItems=void 0,this.queueChartCreation=void 0,this.useAnimatedCharts=void 0,this.hideLicenceWatermark=void 0,this.enableResponsiveFeatures=void 0,this.autoDisposeChart=void 0,this.placeholder=void 0,this.selectionTheme=void 0,this.ignoreSmoothRenderingLimit=void 0,this.tooltipFormatter=void 0,this.dataLabelFormatter=void 0,this.guideTooltipFormatter=void 0,this.xAxisLabelFormatter=void 0,this.yAxisLabelFormatter=void 0,this.messageOptions=void 0,this.errorPolicy=r.L.Throw,this.hideLoaderAnimation=void 0,this.runtimeDataFilters=void 0,this.usePopupTemplateFieldsInfo=void 0,this.layerFilterChangePolicy=r.A.Refresh,this.layerRendererChangePolicy=r.E.Refresh,this.ignoreViewExtent=void 0,this.showNotifyPanel=!1}handleChartOutputDataChange(e){this.arcgisDataProcessComplete.emit(e.detail)}handleLegendItemVisibilityChanged(e){this.arcgisLegendItemVisibilityChange.emit(e.detail)}handleUpdateCompleted(e){this.arcgisUpdateComplete.emit(e.detail)}handleBadDataWarningRaise(e){this.arcgisBadDataWarningRaise.emit(e.detail)}handleSeriesColorsChange(e){this.arcgisSeriesColorChange.emit(e.detail)}handleAxesMinMaxChange(e){this.arcgisAxesMinMaxChange.emit(e.detail)}handleSelection(e){this.arcgisSelectionComplete.emit(e.detail)}handleTooManySelectedElements(){this.errorPolicy===r.L.Throw&&(this.notifyHeading=this.errorStrings.tooManySelectedElements.title,this.notifyMessage=this.errorStrings.tooManySelectedElements.message,this.notifyOptions={kind:"warning",autoClose:!0,duration:"fast",active:!0},this.showNotifyPanel=!0)}handleAlertClosed(e){e.target===this.el&&(this.skipNextUpdate=!0,this.showNotifyPanel=!1)}async viewChange(e,t){await this.setExtentChangeListener(),void 0!==t&&void 0===e&&await this.refresh()}async layerChange(){await this.addLayerListeners()}async runtimeDataFiltersChange(){this.updatedProps.add("runtimeDataFilters")}async disableInteractionsChange(e){-1!==navigator.userAgent.search("Firefox")&&(e?this.chartRef?.classList.add(a.H.DisableInteractions):this.chartRef?.classList.remove(a.H.DisableInteractions))}legendPositionChange(e){this.config=(0,a.u)(e,this.config)}legendVisibilityChange(e){this.config=(0,a.b)(e,this.config)}filterBySelectionChanged(){this.config=(0,a.r)(this.config)}layerFilterChangePolicyCallBack(e){e!==r.A.Ignore?this.setLayerFilterListener():this.removeLayerFilterListener()}layerRendererChangePolicyCallBack(e){e!==r.E.Ignore?this.setLayerRendererListener():this.removeLayerRendererListener()}async notify(e,t,i){void 0!==this.chart&&this.chart.notify(e,t,i),await Promise.resolve(void 0)}async errorAlert(e){this.errorPolicy===r.L.Throw&&(this.notifyHeading=this.errorStrings.errorHeading,this.notifyMessage=e,this.notifyOptions={kind:"danger",autoClose:!0,active:!0},this.showNotifyPanel=!0)}async resetZoom(){void 0!==this.chart&&this.chart.resetZoom(),await Promise.resolve(void 0)}async switchSelection(){void 0!==this.chart&&!0!==this.filterBySelection&&await this.chart.switchSelection()}async clearSelection(){void 0!==this.chart&&(this.chart.clearSelection(),!0===this.filterBySelection&&await this.refresh())}async refresh(e){const{updateData:t=!0,resetAxesBounds:i=!1,updateExtent:s=!1}=e??{};this.viewExtentUpdated=s,this.updatedProps.add(t?"forceDataUpdate":"forceSimpleUpdate"),i&&(delete this.config?.axes?.[0]?.minimum,delete this.config?.axes?.[0]?.maximum,delete this.config?.axes?.[1]?.minimum,delete this.config?.axes?.[1]?.maximum),await this.componentDidUpdate(),this.viewExtentUpdated=!1}componentShouldUpdate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const[,,s]=t;this.updatedProps.add(s);const a=!this.skipNextUpdate&&!this.noRenderProps.includes(s);return this.skipNextUpdate=!1,a}async componentWillLoad(){this.errorStrings=await(0,a.f)(this.el),this.commonStrings=await(0,a.c)(this.el),this.debouncedChartUpdate=(0,a.p)((async()=>{if(void 0!==this.chart){const e=Array.from(this.updatedProps);if(e.length>0){const t=e.some((e=>this.dataUpdateNeededProps.includes(e)));this.updatedProps.clear(),await this.chart.update({newChartConfig:this.config,updateOptions:(0,a.g)({component:this,dataUpdated:t,viewExtentUpdated:this.viewExtentUpdated}),updateGlobalOptions:(0,a.d)(this),t9nStrings:{errorStrings:this.errorStrings,commonStrings:this.commonStrings}})}await Promise.resolve(void 0)}}),a.m)}async componentDidLoad(){void 0!==this.chartRef&&await this.createChartInstance()}async componentDidUpdate(){if(void 0===this.chart&&void 0!==this.chartCreationProcessing&&(await this.chartCreationProcessing,this.chartCreationProcessing=void 0),await(0,r.M)([r.W.ScatterSeries],this.config),void 0===this.config||void 0===this.chart||this.showNotifyPanel)void 0!==this.chart||void 0!==this.chartCreationProcessing||this.showNotifyPanel?void 0!==this.placeholder&&this.notify(this.placeholder):await this.createChartInstance();else try{(0,a.i)(this.config,this.layer)&&await this.debouncedChartUpdate.push()}catch(e){void 0!==this.chartRef&&(e.name===r.b.ChartDisposed?(this.chart.dispose(),this.chart=void 0,this.chartRef.innerHTML="",await this.createChartInstance(!1)):(e.name===r.b.QueryFeaturesError?this.arcgisDataProcessError.emit(e.details):this.arcgisRuntimeError.emit(e.details??e),this.errorAlert(e?.message)))}void 0!==this.actionBarElement&&(0,r.u)(this.actionBarElement,this.config)}async disconnectedCallback(){this.removeLayerListeners(),this.removeExtentChangeListeners(),void 0!==this.chart&&this.chart.dispose()}render(){const e=this.showNotifyPanel?(0,s.h)(a.k,{heading:this.notifyHeading,message:this.notifyMessage,options:this.notifyOptions}):null,t=this.showNotifyPanel&&"danger"===this.notifyOptions?.kind?a.H.Hide:`${r.W.ScatterSeries} ${a.H.Show}`,i=this.showNotifyPanel?`${a.H.Show} ${a.H.NotifyPanel}`:a.H.Hide;return(0,s.h)(s.H,{key:"c536edac1d40148e6b893b5fefa919c4fd9b04e9"},(0,s.h)("slot",{key:"96c68736b3f3459ccf23d2e9be1703cc3716d2bb",name:r.S.actionBar,onSlotchange:e=>{(0,r.o)(e,r.W.ScatterSeries,this.config)},ref:e=>{this.actionBarElement=e}}),(0,s.h)("div",{key:"9942604ba06a484d9a9f1b74ce524c62d36157b8",class:t,ref:e=>{this.chartRef=e}}),(0,s.h)("div",{key:"d14bbd08004bce2ad9595d80e8ed1903198f3b8d",class:i},e))}async addLayerListeners(){this.removeLayerListeners(),this.layerFilterListener=await(0,a.e)({layer:this.layer,component:this}),this.layerRendererListener=await(0,a.h)({layer:this.layer,component:this})}async setLayerFilterListener(){this.removeLayerFilterListener(),this.layerFilterListener=await(0,a.e)({layer:this.layer,component:this})}async setLayerRendererListener(){this.removeLayerRendererListener(),this.layerRendererListener=await(0,a.h)({layer:this.layer,component:this})}async setExtentChangeListener(){this.removeExtentChangeListeners(),this.extentChangeListeners=await(0,a.j)({view:this.view,layer:this.layer,component:this})}removeLayerListeners(){this.removeLayerFilterListener(),this.removeLayerRendererListener()}removeLayerFilterListener(){void 0!==this.layerFilterListener&&this.layerFilterListener.remove()}removeLayerRendererListener(){void 0!==this.layerRendererListener&&this.layerRendererListener.remove()}removeExtentChangeListeners(){void 0!==this.extentChangeListeners&&(this.extentChangeListeners.forEach((e=>e.remove())),this.extentChangeListeners=[])}checkForIncompatibleChartVersion(){const e=this.config?.version;this.errorPolicy===r.L.Throw&&(0,r.j)(e).versionStatus===r.e.Newer&&(this.notifyHeading=this.errorStrings.incompatibleChartVersion.title,this.notifyMessage=(0,r.K)(this.errorStrings.incompatibleChartVersion.message,{chartVersion:e??""}),this.notifyOptions={kind:"warning",autoClose:!0,active:!0},this.showNotifyPanel=!0)}async createChartInstance(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];void 0!==this.chartCreationProcessing&&(await this.chartCreationProcessing,this.chartCreationProcessing=void 0),await(0,r.M)([r.W.ScatterSeries],this.config),this.checkForIncompatibleChartVersion(),this.updatedProps.clear();try{(0,a.i)(this.config,this.layer)&&(this.chartCreationProcessing=(0,a.z)({chartContainer:this.chartRef,chartConfig:this.config,options:(0,a.g)({component:this}),globalOptions:(0,a.d)(this),t9nStrings:{errorStrings:this.errorStrings,commonStrings:this.commonStrings}})),this.chart=await this.chartCreationProcessing,this.chartCreationProcessing=void 0,e&&(await this.addLayerListeners(),await this.setExtentChangeListener())}catch(t){t.name===r.b.QueryFeaturesError?this.arcgisDataProcessError.emit(t.details):this.arcgisRuntimeError.emit(t.details??t),this.errorAlert(t?.message),this.chart?.dispose(),this.chartCreationProcessing=void 0,this.chart=void 0}}static get assetsDirs(){return["assets"]}get el(){return(0,s.a)(this)}static get watchers(){return{view:["viewChange"],layer:["layerChange"],runtimeDataFilters:["runtimeDataFiltersChange"],disableInteractions:["disableInteractionsChange"],legendPosition:["legendPositionChange"],legendVisibility:["legendVisibilityChange"],filterBySelection:["filterBySelectionChanged"],layerFilterChangePolicy:["layerFilterChangePolicyCallBack"],layerRendererChangePolicy:["layerRendererChangePolicyCallBack"]}}};o.style='.hide{display:none}.am5-modal{width:100%;height:100%;position:absolute;z-index:100000;top:0px;left:0px}.am5-modal-curtain{top:0px;left:0px;width:100%;height:100%;position:absolute;background:rgba(255, 255, 255, 0.5);z-index:100}.am5-modal-wrapper{top:0px;left:0px;width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;white-space:nowrap;background:rgba(255, 255, 255, 0.5);z-index:101}.am5-modal-content{display:inline-block;padding:1.2em;vertical-align:middle;text-align:left;white-space:normal;background:rgb(255, 255, 255);border-radius:4px;box-shadow:rgba(0, 0, 0, 0.45) 0px 0px 36px 0px;color:rgb(0, 0, 0)}.arcgis-charts-modal{box-shadow:none !important}.arcgis-charts-modal-header{background-color:rgba(0, 0, 0, 0.05);font-weight:bold;padding:4px 4px 4px 4px}.show{display:block}.notifyPanel{flex:0 1 auto}.disable-interactions{pointer-events:none}.scatterSeries{flex-grow:1;overflow-y:hidden}.scatterSeries>div{justify-content:center;align-items:center}.scatterSeries .arcgis-charts-modal-inside{padding:1em;padding-left:0}.scatterSeries .arcgis-charts-modal-inside ol{padding-left:2em}.scatterSeries .arcgis-charts-modal-curtain{width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:2001;background-color:rgb(255, 255, 255);opacity:0.5;opacity:1}.scatterSeries .arcgis-charts-modal-content{background:rgba(255, 255, 255, 0.8);color:rgb(0, 0, 0);display:inline-block;position:absolute;top:0px;left:0px;max-width:90%;max-height:90%;overflow:visible;z-index:2002;position:absolute;max-width:90%;max-height:90%;width:auto !important;height:auto !important;margin:auto !important;inset:auto !important;left:auto !important;top:auto !important}.scatterSeries .arcgis-charts-modal-header{display:block;width:100%;min-height:1.8em;background:rgba(0, 0, 0, 0.05)}.scatterSeries .arcgis-charts-modal-close{display:block;position:absolute;top:0.3em;right:0.3em;background:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ0NS4yIDEwOS4ybC00Mi40LTQyLjRMMjU2IDIxMy42IDEwOS4yIDY2LjhsLTQyLjQgNDIuNEwyMTMuNiAyNTYgNjYuOCA0MDIuOGw0Mi40IDQyLjRMMjU2IDI5OC40bDE0Ni44IDE0Ni44IDQyLjQtNDIuNEwyOTguNCAyNTYiLz48L3N2Zz4=") center center/80% no-repeat rgba(100, 100, 100, 0.1);width:1.2em;height:1.2em;cursor:pointer}.scatterSeries .arcgis-charts-modal-title{font-weight:bold;font-size:110%;padding:0.5em 1.2em 0.5em 1em}:host{width:var(--charts-scatter-plot-width, var(--arcgis-charts-default-width));height:var(--charts-scatter-plot-height, var(--arcgis-charts-default-height));display:flex;flex-direction:row}'}}]);
//# sourceMappingURL=37747.ecc0e43d.chunk.js.map