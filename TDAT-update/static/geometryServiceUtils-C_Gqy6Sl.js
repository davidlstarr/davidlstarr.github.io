import{Q as s,s as l,C as c,p as g,n as u}from"./index-CN4ACLGJ.js";async function f(e=null,o){var n,i;if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!e)throw new l("internal:geometry-service-url-not-configured");let r;r="portal"in e?e.portal||c.getDefault():e,await r.load({signal:o});const t=(i=(n=r.helperServices)==null?void 0:n.geometry)==null?void 0:i.url;if(!t)throw new l("internal:geometry-service-url-not-configured");return t}async function y(e,o,r=null,t){const n=await f(r,t),i=new g({geometries:[e],outSpatialReference:o}),a=await u(n,i,{signal:t});if(a&&Array.isArray(a)&&a.length===1)return a[0];throw new l("internal:geometry-service-projection-failed")}export{f as getGeometryServiceURL,y as projectGeometry};
