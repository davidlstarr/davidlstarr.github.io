import{J as o,K as s,aH as c,f as p,bD as u,M as y,by as l,bE as m}from"./index-CN4ACLGJ.js";var n;let t=n=class extends l{static from(e){return m(n,e)}constructor(e){super(e),this.returnAttachmentAssociations=!1,this.returnConnectivityAssociations=!1,this.returnContainmentAssociations=!1,this.extent=null,this.maxGeometryCount=null,this.outSpatialReference=null,this.gdbVersion=null,this.moment=null}writeOutSR(e,i,r){if(e!=null){const{wkid:a}=e;i[r]=JSON.stringify({wkid:a})}}};o([s({type:Boolean,json:{read:{source:"attachmentAssociations"},write:{target:"attachmentAssociations"}}})],t.prototype,"returnAttachmentAssociations",void 0),o([s({type:Boolean,json:{read:{source:"connectivityAssociations"},write:{target:"connectivityAssociations"}}})],t.prototype,"returnConnectivityAssociations",void 0),o([s({type:Boolean,json:{read:{source:"containmentAssociations"},write:{target:"containmentAssociations"}}})],t.prototype,"returnContainmentAssociations",void 0),o([s({type:c,json:{write:!0}})],t.prototype,"extent",void 0),o([s({type:Number,json:{write:!0}})],t.prototype,"maxGeometryCount",void 0),o([s({type:p,json:{write:{allowNull:!0,target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),o([u("outSpatialReference")],t.prototype,"writeOutSR",null),o([s({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),o([s({type:Date,json:{type:Number,write:{writer:(e,i)=>{i.moment=e==null?void 0:e.getTime()}}}})],t.prototype,"moment",void 0),t=n=o([y("esri.rest.networks.support.SynthesizeAssociationGeometriesParameters")],t);const w=t;export{w as default};