"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[74088],{85504:(e,t,a)=>{a.d(t,{Al:()=>r,Vb:()=>i,af:()=>h,rK:()=>u});var n=a(86560);const i="arial-unicode-ms",l="woff2",o=new Map,s=new Set;class c{constructor(e,t){this.fontFace=e,this.promise=t}}async function r(e){const t=d(e),a=u(e),i=o.get(t);if(i)return i.promise;const r=new FontFace(e.family,`url('${n.A.fontsUrl}/woff2/${a}.${l}') format('${l}')`,{style:e.style,weight:e.weight}),h=document.fonts;if(h.has(r)&&"loading"===r.status)return r.loaded;const m=r.load().then((()=>(h.add(r),r)));return o.set(t,new c(r,m)),s.add(r),m}function h(e){if(!e)return i;const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function u(e){const t=m(e)+f(e);return h(e.family)+(t.length>0?t:"-regular")}function d(e){const t=m(e)+f(e);return(e.family||i)+(t.length>0?t:"-regular")}function m(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function f(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}},74088:(e,t,a)=>{a.d(t,{previewSymbol2D:()=>S});var n=a(69539),i=a(59784),l=a(50076),o=a(85504),s=a(76931),c=a(87840),r=a(65709),h=a(26291),u=a(27790);const d="picture-fill",m="picture-marker",f="simple-fill",p="simple-line",y="simple-marker",g="text",w="Aa",b=r.CB.size,v=r.CB.maxSize,L=r.CB.maxOutlineSize,z=r.CB.lineWidth,k=225,M=document.createElement("canvas");function x(e,t){const a=M.getContext("2d"),n=[];t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),a.font=n.join(" ");const{width:i,actualBoundingBoxLeft:l,actualBoundingBoxRight:o,actualBoundingBoxAscent:s,actualBoundingBoxDescent:c}=a.measureText(e);return{width:Math.ceil(Math.max(i,l+o)),height:Math.ceil(s+c),x:Math.floor(l),y:Math.floor((s-c)/2)}}function C(e){const t=e?.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,s.Lz)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,s.Lz)(t.height):null}}function B(e,t){return e>t?"dark":"light"}async function S(e,t){const{shapeDescriptor:a,size:n,renderOptions:i}=function(e,t){const a="number"==typeof t?.size?t?.size:null,n=null!=a?(0,s.Lz)(a):null,i=null!=t?.maxSize?(0,s.Lz)(t.maxSize):null;let l="angle"in e?e.angle:null;null!=t?.rotation&&(l=(l??0)+t.rotation);const o=(0,c.eH)(e);let h=(0,c.$4)(e);"dark"!==A(e,245)||t?.ignoreWhiteSymbols||(h={width:.75,...h,color:"#bdc3c7"});const u={shape:null,fill:o,stroke:h,offset:[0,0]};h?.width&&(h.width=Math.min(h.width,L));const k=h?.width||0;let M=null!=t?.size&&(null==t?.scale||t?.scale),B=0,S=0,F=!1;switch(e.type){case y:{const a=e.style,{width:o,height:c}=C(t),r=o===c&&null!=o?o:null!=n?n:Math.min((0,s.Lz)(e.size),i||v);switch(B=r,S=r,a){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*r},M||(B+=k,S+=k);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[B,.5*S]},{command:"M",values:[.5*B,0]},{command:"L",values:[.5*B,S]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[.5*B,0]},{command:"L",values:[B,.5*S]},{command:"L",values:[.5*B,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k),l&&(F=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k),l&&(F=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,S]},{command:"M",values:[B,0]},{command:"L",values:[0,S]}]},l&&(F=!0);break;case"path":u.shape={type:"path",path:e.path||""},M||(B+=k,S+=k),l&&(F=!0),M=!0}break}case p:{const{width:e,height:a}=C(t),i=(0,c.O0)(h).reduce(((e,t)=>e+t),0),l=i&&Math.ceil(z/i),o=a??n??k,s=e??(i*l||z);h&&(h.width=o),B=s,S=o,M=!0,u.shape={type:"path",path:[{command:"M",values:[o/2,S/2]},{command:"L",values:[B-o/2,S/2]}]};break}case d:case f:{const e="object"==typeof t?.symbolConfig&&!!t?.symbolConfig?.isSquareFill,{width:a,height:i}=C(t);B=!e&&a!==i||null==a?null!=n?n:b:a,S=!e&&a!==i||null==i?B:i,M||(B+=k,S+=k),M=!0,u.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:r.nq.fill[0];break}case m:{const a=Math.min((0,s.Lz)(e.width),i||v),o=Math.min((0,s.Lz)(e.height),i||v),{width:c,height:r}=C(t),h=c===r&&null!=c?c:null!=n?n:Math.max(a,o),d=a/o;B=d<=1?Math.ceil(h*d):h,S=d<=1?h:Math.ceil(h/d),u.shape={type:"image",x:-Math.round(B/2),y:-Math.round(S/2),width:B,height:S,src:e.url||""},l&&(F=!0);break}case g:{const a=e,l=t?.overrideText||a.text||w,o=a.font,{width:c,height:r}=C(t),h=null!=r?r:null!=n?n:Math.min((0,s.Lz)(o.size),i||v),{width:d,height:m}=x(l,{weight:o.weight,size:h,family:o.family}),f=/[\uE600-\uE6FF]/.test(l);B=c??(f?h:d),S=f?h:m;let p=.5*(f?h:m);f&&(p+=5),u.shape={type:"text",text:l,x:a.xoffset||0,y:a.yoffset||p,align:"middle",alignBaseline:a.verticalAlignment,decoration:o&&o.decoration,rotated:a.rotated,kerning:a.kerning},u.font=o&&{size:h,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:u,size:[B,S],renderOptions:{node:t?.node,scale:M,opacity:t?.opacity,rotations:[l],useRotationSize:F,effectView:t?.effectView,ariaLabel:t?.ariaLabel}}}(e,t);if(!a.shape)throw new l.A("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,t){const a=t.fill,n=e.color;if("pattern"===a?.type&&n&&e.type!==d){const e=await(0,c.rc)(a.src,n.toCss(!0));a.src=e,t.fill=a}}(e,a),await async function(e,t,a,n){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await(0,o.Al)(e.font)}catch{}const{width:i,height:l}=C(n);if(!/[\uE600-\uE6FF]/.test(t.shape.text)){const{width:o,height:s,x:c,y:r}=x(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family});a[0]=i??o,a[1]=l??s,t.shape.x=c,t.shape.y=r;let h="angle"in e?e.angle:null;if(null!=n?.rotation&&(h=(h??0)+n.rotation),h){const e=h*(Math.PI/180),t=Math.abs(Math.sin(e)),n=Math.abs(Math.cos(e));a[1]=a[0]*t+a[1]*n}}}(e,a,n,t);const k=[[a]];if("object"==typeof t?.symbolConfig&&t?.symbolConfig?.applyColorModulation){const e=.6*n[0];k.unshift([{...a,offset:[-e,0],fill:(0,r.QC)(a.fill,-.3)}]),k.push([{...a,offset:[e,0],fill:(0,r.QC)(a.fill,.3)}]),n[0]+=2*e,i.scale=!1}return"text"===e.type&&function(e,t,a,n,i){if(null!=e.haloColor&&null!=e.haloSize){i.masking??=a.map((()=>[]));const l=(0,s.Lz)(e.haloSize);n[0]+=l,n[1]+=l,a.unshift([{...t,fill:null,stroke:{color:e.haloColor,width:2*l,join:"round",cap:"round"}}]),i.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*u.y7,height:n[1]+2*u.y7},fill:[255,255,255],stroke:null},{...t,fill:[0,0,0,0],stroke:null}])}null==e.backgroundColor&&null==e.borderLineColor||(n[0]+=2*u.y7,n[1]+=2*u.y7,a.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,s.Lz)(e.borderLineSize)}}]),i.masking?.unshift([]))}(e,a,k,n,i),(0,h.fz)(k,n,i)}function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k;const a=(0,c.eH)(e),l=(0,c.$4)(e),o=!a||"type"in a?null:new n.A(a),s=l?.color?new n.A(l?.color):null,r=o?B((0,i.Ws)(o),t):null,h=s?B((0,i.Ws)(s),t):null;return h?r?r===h?r:t>=k?"light":"dark":h:r}}}]);
//# sourceMappingURL=74088.3e70c225.chunk.js.map