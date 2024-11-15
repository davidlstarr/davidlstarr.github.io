"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[54306],{54306:(e,t,i)=>{i.d(t,{default:()=>j});var l=i(35143),s=i(94643),o=i(63241),n=i(5632),a=i(76460),r=i(46053),d=(i(81806),i(47249),i(85842)),c=i(25329),h=i(81558),p=i(50912),m=i(77666),u=i(98108),_=i(66355),b=i(49716),g=i(63582),y=i(12254),v=i(54761);const I="esri-table-list",M=`${I}__item`,f={base:I,actionMenu:`${I}__action-menu`,actionGroup:`${I}__action-group`,filterNoResults:`${I}__filter-no-results`,item:M,itemContent:`${M}-content`,itemContentBottom:`${M}-content-bottom`,itemMessage:`${M}-message`,itemActionIcon:`${M}-action-icon`,itemActionImage:`${M}-action-image`,itemTemporaryIcon:`${M}-temporary-icon`,publishing:`${I}__publishing`,statusIndicator:`${I}__status-indicator`};var w=i(91967),E=i(68134),Z=i(21403),C=i(17879),L=i(50037),F=i(16700),A=i(21905),P=i(76192),T=i(95752);let D=class extends((0,n.sA)(c.A)){constructor(e,t){super(e,t),this.className=null,this.content=null,this.flowEnabled=!1,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}get disabled(){return!(this.content&&this.listItem)}set disabled(e){this._overrideIfSome("disabled",e)}get icon(){const{image:e}=this,t=this._getFirstWidget();return this._get("icon")??(!e&&t?t.icon:null)}set icon(e){this._overrideIfSome("icon",e)}get title(){return this._get("title")||(this._getFirstWidget()?.label??"")}set title(e){this._override("title",e)}render(){return(0,v.K)("div",{class:"esri-list-item-panel"},this._renderContents())}_renderContent(e){const{disabled:t,open:i}=this;return e&&!t&&i?"string"==typeof e?(0,v.K)("div",{innerHTML:e,key:e}):(0,T.p4)(e)?(0,v.K)("div",{key:"content-widget"},e.render()):e instanceof HTMLElement?(0,v.K)("div",{afterCreate:this._attachToNode,bind:e,key:"content-element"}):null:null}_renderContents(){const{content:e,open:t}=this;return t?Array.isArray(e)?e.map((e=>this._renderContent(e))):this._renderContent(e):null}_attachToNode(e){e.appendChild(this)}_getWidget(e){return(0,T.p4)(e)?e:null}_getFirstWidget(){const{content:e}=this;return Array.isArray(e)?e.map((e=>this._getWidget(e))).find((e=>e)):this._getWidget(e)}};(0,l._)([(0,r.MZ)()],D.prototype,"className",void 0),(0,l._)([(0,r.MZ)()],D.prototype,"content",void 0),(0,l._)([(0,r.MZ)()],D.prototype,"disabled",null),(0,l._)([(0,r.MZ)()],D.prototype,"flowEnabled",void 0),(0,l._)([(0,r.MZ)()],D.prototype,"icon",null),(0,l._)([(0,r.MZ)()],D.prototype,"image",void 0),(0,l._)([(0,r.MZ)()],D.prototype,"listItem",void 0),(0,l._)([(0,r.MZ)()],D.prototype,"open",void 0),(0,l._)([(0,r.MZ)()],D.prototype,"title",null),(0,l._)([(0,r.MZ)()],D.prototype,"visible",void 0),D=(0,l._)([(0,d.$)("esri.widgets.TableList.ListItemPanel")],D);const k=D;var N;const S=s.A.ofType({key:"type",defaultKeyValue:"button",base:L.A,typeMap:{button:F.A,toggle:P.A,slider:A.A}}),O=s.A.ofType(S);let x=N=class extends((0,n.sA)(w.A)){constructor(e){super(e),this.actionsSections=new O,this.actionsOpen=!1,this.checkPublishStatusEnabled=!1,this.hidden=!1,this.layer=null,this.listItemCreatedFunction=null,this.panel=null,this.sortable=!0}initialize(){if(this.addHandles([(0,E.watch)((()=>this.panel),(e=>this._setListItemOnPanel(e)),E.initial)]),"function"==typeof this.listItemCreatedFunction){const e={item:this};this.listItemCreatedFunction.call(null,e)}}destroy(){this.panel?.destroy()}get error(){return this.layer?.loadError}castPanel(e){return this.panel?.open&&!e.hasOwnProperty("open")&&(e.open=!0),e?new k(e):null}get publishing(){const{layer:e,checkPublishStatusEnabled:t}=this;return(t&&e&&"publishingInfo"in e&&"publishing"===e.publishingInfo?.status)??!1}get title(){const e=(0,C.Jt)(this,"layer.layer");return(!e||e&&(0,C.Jt)(this,"layer.layer.loaded")?this.layer?.title:null)??""}set title(e){this._overrideIfSome("title",e)}clone(){return new N({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,hidden:this.hidden,layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,panel:this.panel,sortable:this.sortable,title:this.title})}_setListItemOnPanel(e){e&&(e.listItem=this)}};(0,l._)([(0,r.MZ)({type:O})],x.prototype,"actionsSections",void 0),(0,l._)([(0,r.MZ)()],x.prototype,"actionsOpen",void 0),(0,l._)([(0,r.MZ)()],x.prototype,"checkPublishStatusEnabled",void 0),(0,l._)([(0,r.MZ)({readOnly:!0})],x.prototype,"error",null),(0,l._)([(0,r.MZ)()],x.prototype,"hidden",void 0),(0,l._)([(0,r.MZ)()],x.prototype,"layer",void 0),(0,l._)([(0,r.MZ)()],x.prototype,"listItemCreatedFunction",void 0),(0,l._)([(0,r.MZ)({type:k})],x.prototype,"panel",void 0),(0,l._)([(0,Z.w)("panel")],x.prototype,"castPanel",null),(0,l._)([(0,r.MZ)({readOnly:!0})],x.prototype,"publishing",null),(0,l._)([(0,r.MZ)()],x.prototype,"sortable",void 0),(0,l._)([(0,r.MZ)()],x.prototype,"title",null),x=N=(0,l._)([(0,d.$)("esri.widgets.TableList.ListItem")],x);const B=x;var $=i(54099);const K="map",U="layer-list-mode",R=s.A.ofType(B);let G=class extends $.A.EventedAccessor{constructor(e){super(e),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.tableItems=new R,this.map=null}initialize(){this.addHandles([(0,E.watch)((()=>[this.tables,this.map?.allTables.toArray()]),(()=>this._compileList()),E.initial),(0,E.watch)((()=>[this.map?.loaded,this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled]),(()=>this._recompileList()))],K)}destroy(){this._removeAllItems(),this.map=null,this.tables=null}get tables(){return this.map?.allTables}set tables(e){this._overrideIfSome("tables",e)}get state(){const{map:e,tables:t}=this;if(!e)return t?"ready":"disabled";const i=e?.loadStatus;return"string"==typeof i?"loaded"===i?"ready":"loading"===i?"loading":"disabled":"ready"}get totalItems(){return this.tableItems.length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}_removeAllItems(){this.tableItems.destroyAll()}_getViewableTables(e){return e?this.listModeDisabled?e:e.filter((e=>"hide"!==(0,p.Qv)(e))):void 0}_watchTablesListMode(e){this.removeHandles(U),e&&!this.listModeDisabled&&this.addHandles((0,E.watch)((()=>e.filter((e=>"listMode"in e)).map((e=>e.listMode)).toArray()),(()=>this._compileList())),U)}_compileList(){const{tables:e}=this;this._watchTablesListMode(e);const t=this._getViewableTables(e);t?.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{tableItems:t,listItemCreatedFunction:i,checkPublishStatusEnabled:l}=this;e.forEach((e=>{t.some((t=>t.layer===e))||t.add(new B({checkPublishStatusEnabled:l,layer:e,listItemCreatedFunction:i}))}))}_removeItems(e){const{tableItems:t}=this;t.forEach((i=>{if(!i)return;const l=e?.find((e=>i.layer===e));l||(t.remove(i),i.destroy())}))}_sortItems(e){const{tableItems:t}=this;t.sort(((t,i)=>{const l=e.indexOf(t.layer),s=e.indexOf(i.layer);return l>s?-1:l<s?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}};(0,l._)([(0,r.MZ)()],G.prototype,"checkPublishStatusEnabled",void 0),(0,l._)([(0,r.MZ)()],G.prototype,"listItemCreatedFunction",void 0),(0,l._)([(0,r.MZ)({nonNullable:!0})],G.prototype,"listModeDisabled",void 0),(0,l._)([(0,r.MZ)({type:R,readOnly:!0})],G.prototype,"tableItems",void 0),(0,l._)([(0,r.MZ)()],G.prototype,"tables",null),(0,l._)([(0,r.MZ)()],G.prototype,"map",void 0),(0,l._)([(0,r.MZ)({readOnly:!0})],G.prototype,"state",null),(0,l._)([(0,r.MZ)()],G.prototype,"totalItems",null),G=(0,l._)([(0,d.$)("esri.widgets.TableList.TableListViewModel")],G);const W=G;let H=class extends w.A{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryTableIndicators=!1}};(0,l._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],H.prototype,"closeButton",void 0),(0,l._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],H.prototype,"collapseButton",void 0),(0,l._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],H.prototype,"errors",void 0),(0,l._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],H.prototype,"filter",void 0),(0,l._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],H.prototype,"flow",void 0),(0,l._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],H.prototype,"heading",void 0),(0,l._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],H.prototype,"statusIndicators",void 0),(0,l._)([(0,r.MZ)({type:Boolean,nonNullable:!0})],H.prototype,"temporaryTableIndicators",void 0),H=(0,l._)([(0,d.$)("esri.widgets.TableList.TableListVisibleElements")],H);const V=H;function z(e){return e["data-item"]}const J=s.A.ofType(B);let Q=class extends((0,n.sA)(c.A)){constructor(e,t){super(e,t),this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this._rootGroupUid=`table-${this.uid}`,this.collapsed=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.minDragEnabledItems=p.ep,this.minFilterItems=p.dv,this.selectedItems=new J,this.selectionMode="none",this.viewModel=new W,this.visibleElements=new V,this._canMove=(e,t)=>{let{dragEl:i,fromEl:l,toEl:s}=e;const o="pull"===t?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,n=z(i);if(!n?.sortable)return!1;const a=z(l),r=(0,p.MN)(l),d=z(s),c=(0,p.MN)(s),h=!!r&&!!c&&r===c,m={selected:n,from:a,to:d},u=l.group,_=s.group;return u&&_&&"function"==typeof o?o.call(null,m):h},this._onCalciteListOrderChange=e=>{const{_lastDragDetail:t}=this,{toEl:i,fromEl:l,dragEl:s,newIndex:o}=e;if(!l||!i||t?.newIndex===o&&t?.dragEl===s&&t?.toEl===i&&t?.fromEl===l)return;this._lastDragDetail=e;const n=Array.from(l.children).filter((e=>e?.matches("calcite-list-item"))).map((e=>e.value));!function(e,t){e?.sort(((e,i)=>{const l=t.indexOf(e.uid),s=t.indexOf(i.uid);return l>s?-1:l<s?1:0}))}(this.map?.tables,n)},this._onTriggerAction=(e,t)=>{this.triggerAction(e,t)},this._onPanelOpen=()=>{this._focusPanelFlowItem=!0},this._onSelectedDragItemLayerUidChange=e=>{this._selectedDragItemLayerUid=e}}loadDependencies(){return(0,m.W)({button:()=>Promise.all([i.e(39879),i.e(62785),i.e(92085),i.e(52602)]).then(i.bind(i,52602)),flow:()=>i.e(14961).then(i.bind(i,14961)),"flow-item":()=>Promise.all([i.e(39879),i.e(62785),i.e(48897),i.e(48347),i.e(90373),i.e(53794),i.e(24706),i.e(46269),i.e(40661)]).then(i.bind(i,40661)),list:()=>Promise.all([i.e(39879),i.e(62785),i.e(92085),i.e(79545),i.e(66289)]).then(i.bind(i,66289)),notice:()=>Promise.all([i.e(39879),i.e(62785),i.e(4189)]).then(i.bind(i,4189))})}get _dragEnabled(){return this.viewModel.totalItems>=this.minDragEnabledItems&&this.dragEnabled}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get icon(){return"table"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get map(){return this.viewModel.map}set map(e){this.viewModel.map=e}get multipleSelectionEnabled(){return(0,o.Lx)(a.A.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),"multiple"===this.selectionMode}set multipleSelectionEnabled(e){(0,o.Lx)(a.A.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.selectionEnabled?"single":"none"}get selectionEnabled(){return(0,o.Lx)(a.A.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),"none"!==this.selectionMode&&this.dragEnabled}set selectionEnabled(e){(0,o.Lx)(a.A.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get tableItems(){return this.viewModel.tableItems}get tables(){return this.viewModel.tables}set tables(e){this.viewModel.tables=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const e=this.viewModel?.state,t={[u.D.hidden]:"loading"===e,[u.D.disabled]:"disabled"===e},i=this.tableItems?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)));return(0,v.K)("div",{class:this.classes(f.base,u.D.widget,u.D.panel,t)},i?.length?this._renderItems(i):this._renderNoItems())}_renderNoItemsMessage(){return(0,v.K)("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return(0,v.K)("div",{class:f.itemMessage,key:"esri-layer-list__no-items"},(0,v.K)("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e?.toArray().filter((e=>{let{panel:t}=e;return t?.open&&!t.disabled&&t.flowEnabled})).map((e=>{let{title:t,panel:i}=e;const l=()=>this._handlePanelFlowItemBack(i);return(0,v.K)("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:t,heading:i.title,headingLevel:this.headingLevel,key:`flow-panel-${i.uid}`,onCalciteFlowItemBack:e=>{e.preventDefault(),l()}},i.render(),(0,v.K)("calcite-button",{appearance:"transparent",onclick:l,slot:"footer-actions",width:"full"},this.messagesCommon.back))}))}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,(0,b.Z6)(e))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,(0,b.Z6)(e))}_renderItems(e){const{visible:t,collapsed:i,visibleElements:{closeButton:l,collapseButton:s,heading:o,flow:n},_dragEnabled:a,_filterEnabled:r,_rootGroupUid:d,selectionMode:c,messages:h,filterPlaceholder:p,filterText:m}=this,u=[(0,v.K)("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:l,closed:!t,collapsed:i,collapsible:s,heading:o?h.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},(0,v.K)("calcite-list",{canPull:e=>this._canMove(e,"pull"),canPut:e=>this._canMove(e,"put"),"data-layer-type":d,dragEnabled:a,filterEnabled:r,filterPlaceholder:p,filterProps:_.o,filterText:r?m:"",group:d,key:"root-list",label:h.widgetLabel,selectionAppearance:"border",selectionMode:c,onCalciteListChange:e=>this._handleCalciteListChange(e),onCalciteListDragEnd:e=>this._handleCalciteListDragEnd(e.detail),onCalciteListFilter:e=>this.filterText=e.target?.filterText??"",onCalciteListOrderChange:e=>this._onCalciteListOrderChange(e.detail)},e?.toArray().map((e=>this._renderItem(e))),e?.length&&r?(0,v.K)("div",{class:f.filterNoResults,slot:"filter-no-results"},(0,v.K)("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e)];return t?n?(0,v.K)("calcite-flow",{key:"root-flow"},u):u:null}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:i,oldIndex:l}=e;t.insertBefore(i,t.children[l])}_renderItem(e){return(0,v.K)(h.A,{canMove:this._canMove,css:f,dragEnabled:this.dragEnabled,item:e,key:`layerListItem-${e.layer.uid}`,listModeDisabled:this.viewModel.listModeDisabled,messages:this.messages,messagesCommon:this.messagesCommon,rootGroupUid:this._rootGroupUid,selectedDragItemLayerUid:this._selectedDragItemLayerUid,selectedItems:this.selectedItems,selectionMode:this.selectionMode,visibleElements:this.visibleElements,onAction:this._onTriggerAction,onPanelOpen:this._onPanelOpen,onSelectedDragItemLayerUidChange:this._onSelectedDragItemLayerUidChange})}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if("none"===t)return;const l=e.target.selectedItems.map((e=>z(e))).filter(Boolean);i.removeAll(),i.addMany(l)}};(0,l._)([(0,r.MZ)()],Q.prototype,"_focusRootFlowItem",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"_focusPanelFlowItem",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"_dragEnabled",null),(0,l._)([(0,r.MZ)()],Q.prototype,"_filterEnabled",null),(0,l._)([(0,r.MZ)()],Q.prototype,"collapsed",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"dragEnabled",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"filterPlaceholder",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"filterText",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"headingLevel",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"icon",null),(0,l._)([(0,r.MZ)()],Q.prototype,"label",null),(0,l._)([(0,r.MZ)()],Q.prototype,"listItemCanGiveFunction",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"listItemCanReceiveFunction",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"listItemCreatedFunction",null),(0,l._)([(0,r.MZ)()],Q.prototype,"map",null),(0,l._)([(0,r.MZ)(),(0,g.G)("esri/widgets/TableList/t9n/TableList")],Q.prototype,"messages",void 0),(0,l._)([(0,r.MZ)(),(0,g.G)("esri/t9n/common")],Q.prototype,"messagesCommon",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"minDragEnabledItems",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"minFilterItems",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"multipleSelectionEnabled",null),(0,l._)([(0,r.MZ)()],Q.prototype,"selectionEnabled",null),(0,l._)([(0,r.MZ)()],Q.prototype,"selectedItems",void 0),(0,l._)([(0,r.MZ)()],Q.prototype,"selectionMode",void 0),(0,l._)([(0,r.MZ)({readOnly:!0})],Q.prototype,"tableItems",null),(0,l._)([(0,r.MZ)()],Q.prototype,"tables",null),(0,l._)([(0,y.U)("trigger-action"),(0,r.MZ)({type:W})],Q.prototype,"viewModel",void 0),(0,l._)([(0,r.MZ)({type:V,nonNullable:!0})],Q.prototype,"visibleElements",void 0),Q=(0,l._)([(0,d.$)("esri.widgets.TableList")],Q);const j=Q}}]);
//# sourceMappingURL=54306.ea0cf943.chunk.js.map