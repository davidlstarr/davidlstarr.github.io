import{J as o,by as l,K as d,f_ as m,M as y,bF as p,bH as b,bG as N,P as h}from"./index-CN4ACLGJ.js";let t=class extends l{constructor(r){super(r),this.namedTraceConfigurations=[]}};o([d({type:[m],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],t.prototype,"namedTraceConfigurations",void 0),t=o([y("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],t);const C=t;async function $(r,s,i){const e=p(r),a=s.toJSON();s.globalIds&&s.globalIds.length>0&&(a.globalIds=JSON.stringify(s.globalIds)),s.creators&&s.creators.length>0&&(a.creators=JSON.stringify(s.creators)),s.tags&&s.tags.length>0&&(a.tags=JSON.stringify(s.tags)),s.names&&s.names.length>0&&(a.names=JSON.stringify(s.names));const n={...a,f:"json"},g=b({...e.query,...n}),c=N(g,{...i,method:"post"}),f=`${e.path}/traceConfigurations/query`,{data:u}=await h(f,c);return C.fromJSON(u)}export{$ as queryNamedTraceConfigurations};
