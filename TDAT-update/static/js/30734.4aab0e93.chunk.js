/*! For license information please see 30734.4aab0e93.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[9606,30734,67817],{30734:(e,t,n)=>{n.r(t),n.d(t,{groupByRegion:()=>a});var o=n(9606),s=n(67817);n(74200);const r=e=>e.map((e=>{const{label:t}=e,n=(0,s.extractRegion)(t);return{...e,continent:n}}));async function a(){const e=[],t=o.j.map((e=>({label:e}))),n=r(t);for(const o of n){const{label:t,continent:s}=o;if(o.visited)continue;o.visited=!0;const r={label:s,tzs:[{label:t}]};for(const e of n.filter((e=>!e.visited))){const{label:t,continent:n}=e;if(s===n){const n={label:t};r.tzs.push(n),e.visited=!0}}e.push(r)}return e.map((e=>(e.tzs=e.tzs.sort(((e,t)=>e.label.localeCompare(t.label))),{label:e.label,tzs:e.tzs.map((e=>e.label))}))).sort(((e,t)=>e.label.localeCompare(t.label)))}},67817:(e,t,n)=>{n.r(t),n.d(t,{extractRegion:()=>r,getCountry:()=>a,global:()=>s});var o=n(74200);const s="Global";function r(e){if(function(e){return 0===(0,o.a)(e).countries.length}(e))return s;const t=e.indexOf("/");return-1===t?e:e.slice(0,t)}function a(e){return(0,o.b)(e)?.id??e}},9606:(e,t,n)=>{n.d(t,{j:()=>r,normalize:()=>a});var o=n(74200);const s={CET:"Europe/Brussels",CST6CDT:"America/Chicago",EET:"Europe/Athens",EST:"America/Panama",EST5EDT:"America/New_York",HST:"Pacific/Honolulu",MET:"Europe/Brussels",MST:"America/Phoenix",MST7MDT:"America/Denver",PST8PDT:"America/Los_Angeles",WET:"Europe/Lisbon"},r=(()=>{const e=Object.keys(s);return Object.keys((0,o.g)()).filter((t=>!e.includes(t)))})();function a(e){const t=s[e];if(t)return t;const n=(0,o.a)(e);return n?.aliasOf??e}}}]);
//# sourceMappingURL=30734.4aab0e93.chunk.js.map