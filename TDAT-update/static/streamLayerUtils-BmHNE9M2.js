import{$ as m,j as c}from"./utils-3eKaoNIc.js";import{bN as u,a as y,d as i,i as p}from"./index-CN4ACLGJ.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-Bxr9XU7y.js";import"./saveUtils-3-Kz4E4O.js";const s="Stream Service",f="Feed",d="stream-layer-save",v="stream-layer-save-as";function n(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:a,title:o,fullExtent:t}=r;e.url=a.path,e.title||(e.title=o),e.extent=null,t!=null&&(e.extent=await u(t)),y(e,i.METADATA),p(e,i.SINGLE_LAYER)}async function E(r,e){return m({layer:r,itemType:s,additionalItemType:f,validateLayer:n,createItemData:l,errorNamePrefix:d},e)}async function L(r,e,a){return c({layer:r,itemType:s,validateLayer:n,createItemData:l,errorNamePrefix:v,newItem:e,setItemProperties:x},a)}export{E as save,L as saveAs};
