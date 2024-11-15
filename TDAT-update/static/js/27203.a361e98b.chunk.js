/*! For license information please see 27203.a361e98b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[27203],{75338:(e,t,n)=>{n.r(t),n.d(t,{CalciteListItem:()=>x,defineCustomElement:()=>L});var i=n(95146),a=n(39879),l=n(65079),s=n(62785),o=n(76988),c=n(76527),r=n(77345),d=n(9468),h=n(48897),u=n(67294);const g="handle",f="handle--selected",C="drag",p="{itemLabel}",b="{position}",m="{total}",v=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleChange=(0,i.lh)(this,"calciteHandleChange",6),this.calciteHandleNudge=(0,i.lh)(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=(0,i.lh)(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=e=>{if(!this.disabled)switch(e.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),e.preventDefault();break;case"ArrowUp":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"})}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){(0,o.c)(this),(0,s.c)(this)}async componentWillLoad(){(0,c.s)(this),await(0,o.s)(this)}componentDidLoad(){(0,c.a)(this)}componentDidRender(){(0,l.u)(this)}disconnectedCallback(){(0,o.d)(this),(0,s.d)(this)}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}async setFocus(){await(0,c.c)(this),this.handleButton?.focus()}getTooltip(){const{label:e,messages:t}=this;return t?e?t.dragHandle.replace(p,e):t.dragHandleUntitled:""}getAriaText(e){const{setPosition:t,setSize:n,label:i,messages:a,selected:l}=this;if(!a||!i||"number"!==typeof n||"number"!==typeof t)return null;return("label"===e?l?a.dragHandleChange:a.dragHandleIdle:l?a.dragHandleActive:a.dragHandleCommit).replace(b,t.toString()).replace(p,i).replace(m,n.toString())}render(){return(0,i.h)(l.I,{key:"1a694de393421691c83e7265850275c217ef7ffe",disabled:this.disabled},(0,i.h)("span",{key:"82ff692c15c2d9294ceb814b3f7f06bb4d8ff0e0","aria-checked":this.disabled?null:(0,a.t)(this.selected),"aria-disabled":this.disabled?(0,a.t)(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),class:{[g]:!0,[f]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:e=>{this.handleButton=e},role:"radio",tabIndex:this.disabled?null:0,title:this.getTooltip()},(0,i.h)("calcite-icon",{key:"25862a953826aea2d594507157aaffc21d07001c",icon:C,scale:"s"})))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;outline-color:transparent;color:var(--calcite-handle-icon-color, var(--calcite-color-border-input));background-color:var(--calcite-handle-background-color, transparent);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{color:var(--calcite-handle-icon-color-hover, var(--calcite-color-text-1));background-color:var(--calcite-handle-background-color-hover, var(--calcite-color-foreground-2))}:host(:not([disabled])) .handle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          );color:var(--calcite-handle-icon-color-hover, var(--calcite-color-text-1))}:host(:not([disabled])) .handle--selected{color:var(--calcite-handle-icon-color-selected, var(--calcite-color-text-1));background-color:var(--calcite-handle-background-color-selected, var(--calcite-color-foreground-3))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-handle",{selected:[1540],disabled:[516],dragHandle:[513,"drag-handle"],messages:[1040],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],blurUnselectDisabled:[4,"blur-unselect-disabled"],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function S(){if("undefined"===typeof customElements)return;["calcite-handle","calcite-icon"].forEach((e=>{switch(e){case"calcite-handle":customElements.get(e)||customElements.define(e,v);break;case"calcite-icon":customElements.get(e)||(0,u.d)()}}))}S();var I=n(26964);const y=new Map,E=(0,i.w$)(class extends i.wt{constructor(){var e;super(),e=this,this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=(0,i.lh)(this,"calciteListItemSelect",6),this.calciteListItemClose=(0,i.lh)(this,"calciteListItemClose",6),this.calciteListItemDragHandleChange=(0,i.lh)(this,"calciteListItemDragHandleChange",6),this.calciteListItemToggle=(0,i.lh)(this,"calciteListItemToggle",6),this.calciteInternalListItemSelect=(0,i.lh)(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemSelectMultiple=(0,i.lh)(this,"calciteInternalListItemSelectMultiple",6),this.calciteInternalListItemActive=(0,i.lh)(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=(0,i.lh)(this,"calciteInternalFocusPreviousItem",6),this.calciteInternalListItemChange=(0,i.lh)(this,"calciteInternalListItemChange",6),this.calciteInternalListItemToggle=(0,i.lh)(this,"calciteInternalListItemToggle",6),this.dragHandleSelectedChangeHandler=e=>{this.dragSelected=e.target.selected,this.calciteListItemDragHandleChange.emit(),e.stopPropagation()},this.emitInternalListItemActive=()=>{this.calciteInternalListItemActive.emit()},this.focusCellHandle=()=>{this.handleCellFocusIn(this.handleGridEl)},this.focusCellActionsStart=()=>{this.handleCellFocusIn(this.actionsStartEl)},this.focusCellContent=()=>{this.handleCellFocusIn(this.contentEl)},this.focusCellActionsEnd=()=>{this.handleCellFocusIn(this.actionsEndEl)},this.handleCloseClick=()=>{this.closed=!0,this.calciteListItemClose.emit()},this.handleContentSlotChange=e=>{this.hasCustomContent=(0,a.d)(e)},this.handleActionsStartSlotChange=e=>{this.hasActionsStart=(0,a.d)(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=(0,a.d)(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=(0,a.d)(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=(0,a.d)(e)},this.handleContentBottomSlotChange=e=>{this.hasContentBottom=(0,a.d)(e)},this.handleDefaultSlotChange=e=>{this.handleOpenableChange(e.target)},this.handleToggleClick=()=>{this.toggle()},this.toggle=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!e.open;e.open=t,e.calciteListItemToggle.emit()},this.handleItemClick=e=>{e.defaultPrevented||this.toggleSelected(e.shiftKey)},this.toggleSelected=e=>{const{selectionMode:t,selected:n}=this;this.disabled||("multiple"===t||"single"===t?this.selected=!n:"single-persist"===t&&(this.selected=!0),this.calciteInternalListItemSelectMultiple.emit({selectMultiple:e&&"multiple"===t}),this.calciteListItemSelect.emit())},this.handleItemKeyDown=e=>{if(e.defaultPrevented)return;const{key:t}=e,n=e.composedPath(),{containerEl:i,actionsStartEl:a,actionsEndEl:l,open:s,openable:o}=this,c=this.getGridCells(),r=c.findIndex((e=>n.includes(e)));if("Enter"!==t||n.includes(a)||n.includes(l)){if("ArrowRight"===t){e.preventDefault();const t=r+1;-1===r?!s&&o?(this.toggle(!0),this.focusCell(null)):c[0]&&this.focusCell(c[0]):c[r]&&c[t]&&this.focusCell(c[t])}else if("ArrowLeft"===t){e.preventDefault();const t=r-1;-1===r?(this.focusCell(null),s&&o?this.toggle(!1):this.calciteInternalFocusPreviousItem.emit()):0===r?(this.focusCell(null),i.focus()):c[r]&&c[t]&&this.focusCell(c[t])}}else e.preventDefault(),this.toggleSelected(e.shiftKey)},this.focusCellNull=()=>{this.focusCell(null)},this.handleCellFocusIn=e=>{this.setFocusCell(e,(0,a.E)(e),!0)},this.setFocusCell=(e,t,n)=>{const{parentListEl:i}=this;n&&y.set(i,null);const a=this.getGridCells();a.forEach((e=>{e.tabIndex=-1,e.removeAttribute(d.a)})),e&&(e.tabIndex=e===t?0:-1,e.setAttribute(d.a,""),n&&y.set(i,a.indexOf(e)))},this.focusCell=function(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=(0,a.E)(t);e.setFocusCell(t,i,n),i?.focus()},this.active=!1,this.bordered=!1,this.closable=!1,this.closed=!1,this.description=void 0,this.disabled=!1,this.dragDisabled=!1,this.dragHandle=!1,this.dragSelected=!1,this.filterHidden=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.unavailable=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.messageOverrides=void 0,this.messages=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.level=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1,this.hasContentBottom=!1}activeHandler(e){e||this.focusCell(null,!1)}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleOpenChange(){this.emitCalciteInternalListItemToggle()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(e){e.stopPropagation(),this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){(0,s.c)(this),(0,o.c)(this);const{el:e}=this;this.parentListEl=e.closest("calcite-list"),this.level=(0,r.a)(e)+1,this.setSelectionDefaults()}async componentWillLoad(){(0,c.s)(this),await(0,o.s)(this)}componentDidLoad(){(0,c.a)(this)}componentDidRender(){(0,l.u)(this)}disconnectedCallback(){(0,s.d)(this),(0,o.d)(this)}async setFocus(){await(0,c.c)(this);const{containerEl:e,parentListEl:t}=this,n=y.get(t);if("number"!==typeof n)e?.focus();else{const t=this.getGridCells();t[n]?this.focusCell(t[n]):e?.focus()}}renderSelected(){const{selected:e,selectionMode:t,selectionAppearance:n}=this;return"none"===t||"border"===n?null:(0,i.h)("td",{class:{[d.C.selectionContainer]:!0,[d.C.selectionContainerSingle]:"single"===t||"single-persist"===t},key:"selection-container",onClick:this.handleItemClick},(0,i.h)("calcite-icon",{icon:e?"multiple"===t?d.I.selectedMultiple:d.I.selectedSingle:"multiple"===t?d.I.unselectedMultiple:d.I.unselectedSingle,scale:"s"}))}renderDragHandle(){const{label:e,dragHandle:t,dragSelected:n,dragDisabled:a,setPosition:l,setSize:s}=this;return t?(0,i.h)("td",{"aria-label":e,class:d.C.dragContainer,key:"drag-handle-container",onFocusin:this.focusCellHandle,ref:e=>this.handleGridEl=e,role:"gridcell"},(0,i.h)("calcite-handle",{disabled:a,label:e,onCalciteHandleChange:this.dragHandleSelectedChangeHandler,selected:n,setPosition:l,setSize:s})):null}renderOpen(){const{el:e,open:t,openable:n,messages:l}=this,s=(0,a.a)(e),o=t?d.I.open:"rtl"===s?d.I.closedRTL:d.I.closedLTR,c=t?l.collapse:l.expand;return n?(0,i.h)("td",{class:d.C.openContainer,key:"open-container",onClick:this.handleToggleClick,title:c},(0,i.h)("calcite-icon",{icon:o,key:o,scale:"s"})):null}renderActionsStart(){const{label:e,hasActionsStart:t}=this;return(0,i.h)("td",{"aria-label":e,class:d.C.actionsStart,hidden:!t,key:"actions-start-container",onFocusin:this.focusCellActionsStart,ref:e=>this.actionsStartEl=e,role:"gridcell"},(0,i.h)("slot",{name:d.S.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:e,hasActionsEnd:t,closable:n,messages:a}=this;return(0,i.h)("td",{"aria-label":e,class:d.C.actionsEnd,hidden:!(t||n),key:"actions-end-container",onFocusin:this.focusCellActionsEnd,ref:e=>this.actionsEndEl=e,role:"gridcell"},(0,i.h)("slot",{name:d.S.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),n?(0,i.h)("calcite-action",{appearance:"transparent",class:d.C.close,icon:d.I.close,key:"close-action",label:a.close,onClick:this.handleCloseClick,text:a.close}):null)}renderContentStart(){const{hasContentStart:e}=this;return(0,i.h)("div",{class:d.C.contentStart,hidden:!e},(0,i.h)("slot",{name:d.S.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:e}=this;return(0,i.h)("div",{class:d.C.customContent,hidden:!e},(0,i.h)("slot",{name:d.S.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:e}=this;return(0,i.h)("div",{class:d.C.contentEnd,hidden:!e},(0,i.h)("slot",{name:d.S.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){const{hasContentBottom:e}=this;return(0,i.h)("div",{class:d.C.contentBottom,hidden:!e},(0,i.h)("slot",{name:d.S.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return(0,i.h)("div",{class:{[d.C.nestedContainer]:!0,[d.C.nestedContainerOpen]:this.openable&&this.open}},(0,i.h)("slot",{onSlotchange:this.handleDefaultSlotChange,ref:e=>this.defaultSlotEl=e}))}renderContentProperties(){const{label:e,description:t,hasCustomContent:n}=this;return n||!e&&!t?null:(0,i.h)("div",{class:d.C.content,key:"content"},e?(0,i.h)("div",{class:d.C.label,key:"label"},e):null,t?(0,i.h)("div",{class:d.C.description,key:"description"},t):null)}renderContentContainer(){const{description:e,label:t,selectionMode:n,hasCustomContent:a,unavailable:l}=this,s=a||!!t||!!e,o=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return(0,i.h)("td",{"aria-label":t,class:{[d.C.contentContainer]:!0,[d.C.contentContainerUnavailable]:l,[d.C.contentContainerSelectable]:"none"!==n,[d.C.contentContainerHasCenterContent]:s},key:"content-container",onClick:this.handleItemClick,onFocusin:this.focusCellContent,ref:e=>this.contentEl=e,role:"gridcell"},o)}render(){const{openable:e,open:t,level:n,setPosition:s,setSize:o,active:c,label:r,selected:h,selectionAppearance:u,selectionMode:g,closed:f,filterHidden:C,bordered:p,disabled:b}=this,m="none"!==g&&"border"===u,v=m&&h,S=m&&!h;return(0,i.h)(i.xr,{key:"a610ab740c82b6088400839884d58d4d867829db"},(0,i.h)(l.I,{key:"f05bf10e82fab03ddfdaf3ab2e100dcbd6d69c63",disabled:b},(0,i.h)("div",{key:"4bf63ed08d2a4a049e060d26d3699656558d495e",class:{[d.C.wrapper]:!0,[d.C.wrapperBordered]:p}},(0,i.h)("tr",{key:"d231a113c3bd8ee7f67c2ffb0cf804c142a95fb9","aria-expanded":e?(0,a.t)(t):null,"aria-label":r,"aria-level":n,"aria-posinset":s,"aria-selected":(0,a.t)(h),"aria-setsize":o,class:{[d.C.container]:!0,[d.C.containerHover]:!0,[d.C.containerBorder]:m,[d.C.containerBorderSelected]:v,[d.C.containerBorderUnselected]:S},hidden:f||C,onFocus:this.focusCellNull,onFocusin:this.emitInternalListItemActive,onKeyDown:this.handleItemKeyDown,ref:e=>this.containerEl=e,role:"row",tabIndex:c?0:-1},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom()),this.renderDefaultContainer()))}emitCalciteInternalListItemToggle(){this.calciteInternalListItemToggle.emit()}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){const{parentListEl:e,selectionMode:t,selectionAppearance:n}=this;e&&(t||(this.selectionMode=e.selectionMode),n||(this.selectionAppearance=e.selectionAppearance))}handleOpenableChange(e){if(!e)return;const t=(0,r.g)(e),n=(0,r.b)(e);(0,r.u)(t),this.openable=!!t.length||!!n.length}getGridCells(){return[this.handleGridEl,this.actionsStartEl,this.contentEl,this.actionsEndEl].filter((e=>e&&!e.hidden))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],open:["handleOpenChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-icon-color:var(--calcite-color-brand)}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-color-border-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;overflow:hidden;background-color:var(--calcite-color-foreground-1)}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:none;flex-direction:column;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);margin-inline-start:var(--calcite-list-item-spacing-indent, 1.5rem)}.nested-container--open{display:flex}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content-container--unavailable{opacity:var(--calcite-opacity-disabled)}tr,td{outline-color:transparent}tr{position:relative}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-block:0px;color:var(--calcite-color-border-input);padding-inline:var(--calcite-spacing-md) var(--calcite-spacing-xxs)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-handle,.actions-end calcite-action,.actions-end calcite-handle,.content-start calcite-action,.content-start calcite-handle,.content-end calcite-action,.content-end calcite-handle,.selection-container calcite-action,.selection-container calcite-handle,.drag-container calcite-action,.drag-container calcite-handle,.open-container calcite-action,.open-container calcite-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{position:relative;padding:0px}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}tr:focus .actions-start,tr:focus .actions-end{inset-block:0.125rem}tr:focus .actions-start .close,tr:focus .actions-start ::slotted(calcite-action),tr:focus .actions-start ::slotted(calcite-action-menu),tr:focus .actions-start ::slotted(calcite-handle),tr:focus .actions-start ::slotted(calcite-dropdown),tr:focus .actions-end .close,tr:focus .actions-end ::slotted(calcite-action),tr:focus .actions-end ::slotted(calcite-action-menu),tr:focus .actions-end ::slotted(calcite-handle),tr:focus .actions-end ::slotted(calcite-dropdown){block-size:calc(100% - 0.25rem)}tr:focus::after,tr:focus::before{position:absolute;content:"";inline-size:0.125rem;z-index:var(--calcite-z-index-header);background-color:var(--calcite-color-brand);inset-block:0}tr:focus::before{inset-inline-start:0}tr:focus::after{inset-inline-end:0}.container--border:focus::before{display:none}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-list-item",{active:[4],bordered:[4],closable:[516],closed:[1540],description:[1],disabled:[516],dragDisabled:[516,"drag-disabled"],dragHandle:[4,"drag-handle"],dragSelected:[1540,"drag-selected"],filterHidden:[516,"filter-hidden"],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],unavailable:[516],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],messageOverrides:[1040],messages:[1040],effectiveLocale:[32],defaultMessages:[32],level:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],hasContentBottom:[32],setFocus:[64]},[[0,"calciteInternalListItemGroupDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"],[0,"calciteInternalListDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"]],{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],open:["handleOpenChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function k(){if("undefined"===typeof customElements)return;["calcite-list-item","calcite-action","calcite-handle","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-list-item":customElements.get(e)||customElements.define(e,E);break;case"calcite-action":customElements.get(e)||(0,h.d)();break;case"calcite-handle":customElements.get(e)||S();break;case"calcite-icon":customElements.get(e)||(0,u.d)();break;case"calcite-loader":customElements.get(e)||(0,I.d)()}}))}k();const x=E,L=k},80416:(e,t,n)=>{function i(e){return"l"===e?"m":"s"}async function a(e){await(function(e){return"function"===typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}n.d(t,{c:()=>a,g:()=>i})},65079:(e,t,n)=>{n.d(t,{I:()=>h,u:()=>r});var i=n(95146);function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function l(e){e.target.disabled&&e.preventDefault()}const s=["mousedown","mouseup","click"];function o(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const c={capture:!0};function r(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void function(e){e.el.click=a,t=e.el,t.addEventListener("pointerdown",l,c),s.forEach((e=>t.addEventListener(e,o,c)));var t}(e);!function(e){delete e.el.click,t=e.el,t.removeEventListener("pointerdown",l,c),s.forEach((e=>t.removeEventListener(e,o,c)));var t}(e),e.el.removeAttribute("aria-disabled")}const d="interaction-container",h=(e,t)=>{let{disabled:n}=e;return(0,i.h)("div",{class:d,inert:n},...t)}},76527:(e,t,n)=>{n.d(t,{a:()=>c,c:()=>r,s:()=>o});var i=n(95146),a=n(32811);const l=new WeakMap,s=new WeakMap;function o(e){s.set(e,new Promise((t=>l.set(e,t))))}function c(e){l.get(e)()}async function r(e){if(await function(e){return s.get(e)}(e),(0,a.i)())return(0,i.$x)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},9468:(e,t,n)=>{n.d(t,{C:()=>i,I:()=>s,M:()=>l,S:()=>a,a:()=>o});const i={wrapper:"wrapper",wrapperBordered:"wrapper--bordered",container:"container",containerHover:"container--hover",containerBorder:"container--border",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerUnavailable:"content-container--unavailable",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerOpen:"nested-container--open",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",contentBottom:"content-bottom",actionsEnd:"actions-end",selectionContainer:"selection-container",selectionContainerSingle:"selection-container--single",openContainer:"open-container",dragContainer:"drag-container",close:"close"},a={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentBottom:"content-bottom",contentEnd:"content-end",actionsEnd:"actions-end"},l=0,s={selectedMultiple:"check-square-f",selectedSingle:"bullet-point-large",unselectedMultiple:"square",unselectedSingle:"bullet-point-large",closedLTR:"chevron-right",closedRTL:"chevron-left",open:"chevron-down",blank:"blank",close:"x"},o="data-test-active"},77345:(e,t,n)=>{n.d(t,{a:()=>d,b:()=>o,g:()=>c,u:()=>r});var i=n(32811);const a="calcite-list",l="calcite-list-item-group",s="calcite-list-item";function o(e){return Array.from(e.assignedElements({flatten:!0}).filter((e=>e.matches(a))))}function c(e){const t=e.assignedElements({flatten:!0}),n=t.filter((e=>e?.matches(l))).map((e=>Array.from(e.querySelectorAll(s)))).reduce(((e,t)=>[...e,...t]),[]),i=t.filter((e=>e?.matches(s)));return[...t.filter((e=>e?.matches(a))).map((e=>Array.from(e.querySelectorAll(s)))).reduce(((e,t)=>[...e,...t]),[]),...n,...i]}function r(e){e.forEach((t=>{t.setPosition=e.indexOf(t)+1,t.setSize=e.length}))}function d(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!(0,i.i)())return 0;const n=t?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(n,e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}}}]);
//# sourceMappingURL=27203.a361e98b.chunk.js.map