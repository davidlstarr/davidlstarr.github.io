import{P as m,dJ as u,cw as d,dK as p}from"./index-CN4ACLGJ.js";function n(e,i,h){var o;const a=(o=e.thumbnail)==null?void 0:o.url;return a?m(a,{responseType:"image"}).then(s=>{const t=c(s.data,h);return h!=null&&h.node?(h.node.appendChild(t),h.node):t}):u(e).then(s=>s?i(s,h):null)}function c(e,i){const h=!/\\.svg$/i.test(e.src)&&(i==null?void 0:i.disableUpsampling),a=Math.max(e.width,e.height);let o=(i==null?void 0:i.maxSize)!=null?d(i.maxSize):p.maxSize;h&&(o=Math.min(a,o));const s=typeof(i==null?void 0:i.size)=="number"?i==null?void 0:i.size:null,t=Math.min(o,s!=null?d(s):a);if(t!==a){const l=e.width!==0&&e.height!==0?e.width/e.height:1;l>=1?(e.width=t,e.height=t/l):(e.width=t*l,e.height=t)}return e}export{n as previewWebStyleSymbol};
