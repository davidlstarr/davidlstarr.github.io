"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[47751,54787],{54787:(e,a,r)=>{r.d(a,{c:()=>t,g:()=>n});var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},47751:(e,a,r)=>{r.r(a),r.d(a,{a:()=>s});var t,n=r(54787),o={exports:{}};const i=(0,n.g)(function(){return t||(t=1,e=o,a="undefined"!=typeof document?document.currentScript?.src:void 0,r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var r,t,o=Object.assign({},e),i=new Promise(((e,a)=>{r=e,t=a})),s=Object.assign({},o),u="./this.program",l="";"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),a&&(l=a),l=l.startsWith("blob:")?"":l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1);var c,f=o.print||console.log.bind(console),h=o.printErr||console.error.bind(console);Object.assign(o,s),s=null,o.thisProgram&&(u=o.thisProgram),o.wasmBinary&&(c=o.wasmBinary);var d,p,v,g,m,y,w,b,$,A,T,C=!1;function P(){var e=d.buffer;o.HEAP8=p=new Int8Array(e),o.HEAP16=g=new Int16Array(e),o.HEAPU8=v=new Uint8Array(e),o.HEAPU16=m=new Uint16Array(e),o.HEAP32=y=new Int32Array(e),o.HEAPU32=w=new Uint32Array(e),o.HEAPF32=b=new Float32Array(e),o.HEAPF64=T=new Float64Array(e),o.HEAP64=$=new BigInt64Array(e),o.HEAPU64=A=new BigUint64Array(e)}var W=[],O=[],k=[];function E(){var e=o.preRun.shift();W.unshift(e)}var j=0,S=null;function F(e){throw o.onAbort?.(e),h(e="Aborted("+e+")"),C=!0,e=new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info."),t(e),e}var M,D=e=>e.startsWith("data:application/octet-stream;base64,");function I(e){if(e==M&&c)return new Uint8Array(c);throw"both async and sync fetching of the wasm failed"}function _(e,a,r){return function(e){return c||"function"!=typeof fetch?Promise.resolve().then((()=>I(e))):fetch(e,{credentials:"same-origin"}).then((a=>{if(!a.ok)throw`failed to load wasm binary file at '${e}'`;return a.arrayBuffer()})).catch((()=>I(e)))}(e).then((e=>WebAssembly.instantiate(e,a))).then(r,(e=>{h(`failed to asynchronously prepare wasm: ${e}`),F(e)}))}var R=e=>{for(;0<e.length;)e.shift()(o)};class U{constructor(e){this.ca=e-24}}var x={},H=e=>{for(;e.length;){var a=e.pop();e.pop()(a)}};function Y(e){return this.fromWireType(w[e>>2])}var B,V,z,q={},N={},L={},G=(e,a,r)=>{function t(a){if((a=r(a)).length!==e.length)throw new B("Mismatched type converter count");for(var t=0;t<e.length;++t)Z(e[t],a[t])}e.forEach((function(e){L[e]=a}));var n=Array(a.length),o=[],i=0;a.forEach(((e,a)=>{N.hasOwnProperty(e)?n[a]=N[e]:(o.push(e),q.hasOwnProperty(e)||(q[e]=[]),q[e].push((()=>{n[a]=N[e],++i===o.length&&t(n)})))})),0===o.length&&t(n)},J=e=>{if(null===e)return"null";var a=typeof e;return"object"===a||"array"===a||"function"===a?e.toString():""+e},X=e=>{for(var a="";v[e];)a+=V[v[e++]];return a};function Z(e,a){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in a))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(e,a){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var t=a.name;if(!e)throw new z(`type "${t}" must have a positive integer typeid pointer`);if(N.hasOwnProperty(e)){if(r.Ma)return;throw new z(`Cannot register type '${t}' twice`)}N[e]=a,delete L[e],q.hasOwnProperty(e)&&(a=q[e],delete q[e],a.forEach((e=>e())))}(e,a,r)}var K,Q=(e,a,r)=>{switch(a){case 1:return r?e=>p[e]:e=>v[e];case 2:return r?e=>g[e>>1]:e=>m[e>>1];case 4:return r?e=>y[e>>2]:e=>w[e>>2];case 8:return r?e=>$[e>>3]:e=>A[e>>3];default:throw new TypeError(`invalid integer width (${a}): ${e}`)}},ee=e=>{throw new z(e.aa.da.ba.name+" instance already deleted")},ae=!1,re=()=>{},te=(e,a,r)=>a===r?e:void 0===r.ga||null===(e=te(e,a,r.ga))?null:r.Fa(e),ne={},oe=[],ie=()=>{for(;oe.length;){var e=oe.pop();e.aa.qa=!1,e.delete()}},se={},ue=(e,a)=>{if(!a.da||!a.ca)throw new B("makeClassHandle requires ptr and ptrType");if(!!a.ia!=!!a.fa)throw new B("Both smartPtrType and smartPtr must be specified");return a.count={value:1},le(Object.create(e,{aa:{value:a,writable:!0}}))},le=e=>"undefined"==typeof FinalizationRegistry?(le=e=>e,e):(ae=new FinalizationRegistry((e=>{--(e=e.aa).count.value,0===e.count.value&&(e.fa?e.ia.ja(e.fa):e.da.ba.ja(e.ca))})),re=e=>{ae.unregister(e)},(le=e=>{var a=e.aa;return a.fa&&ae.register(e,{aa:a},e),e})(e));function ce(){}var fe=(e,a)=>Object.defineProperty(a,"name",{value:e}),he=(e,a,r)=>{if(void 0===e[a].ea){var t=e[a];e[a]=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!e[a].ea.hasOwnProperty(n.length))throw new z(`Function '${r}' called with an invalid number of arguments (${n.length}) - expects one of (${e[a].ea})!`);return e[a].ea[n.length].apply(this,n)},e[a].ea=[],e[a].ea[t.pa]=t}},de=(e,a,r)=>{if(o.hasOwnProperty(e)){if(void 0===r||void 0!==o[e].ea&&void 0!==o[e].ea[r])throw new z(`Cannot register public name '${e}' twice`);if(he(o,e,e),o.hasOwnProperty(r))throw new z(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`);o[e].ea[r]=a}else o[e]=a,void 0!==r&&(o[e].Za=r)};function pe(e,a,r,t,n,o,i,s){this.name=e,this.constructor=a,this.la=r,this.ja=t,this.ga=n,this.Ha=o,this.sa=i,this.Fa=s,this.Oa=[]}var ve=(e,a,r)=>{for(;a!==r;){if(!a.sa)throw new z(`Expected null or instance of ${r.name}, got an instance of ${a.name}`);e=a.sa(e),a=a.ga}return e};function ge(e,a){if(null===a){if(this.ya)throw new z(`null is not a valid ${this.name}`);return 0}if(!a.aa)throw new z(`Cannot pass "${J(a)}" as a ${this.name}`);if(!a.aa.ca)throw new z(`Cannot pass deleted object as a pointer of type ${this.name}`);return ve(a.aa.ca,a.aa.da.ba,this.ba)}function me(e,a){if(null===a){if(this.ya)throw new z(`null is not a valid ${this.name}`);if(this.va){var r=this.za();return null!==e&&e.push(this.ja,r),r}return 0}if(!a||!a.aa)throw new z(`Cannot pass "${J(a)}" as a ${this.name}`);if(!a.aa.ca)throw new z(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.ua&&a.aa.da.ua)throw new z(`Cannot convert argument of type ${a.aa.ia?a.aa.ia.name:a.aa.da.name} to parameter type ${this.name}`);if(r=ve(a.aa.ca,a.aa.da.ba,this.ba),this.va){if(void 0===a.aa.fa)throw new z("Passing raw pointer to smart pointer is illegal");switch(this.Ta){case 0:if(a.aa.ia!==this)throw new z(`Cannot convert argument of type ${a.aa.ia?a.aa.ia.name:a.aa.da.name} to parameter type ${this.name}`);r=a.aa.fa;break;case 1:r=a.aa.fa;break;case 2:if(a.aa.ia===this)r=a.aa.fa;else{var t=a.clone();r=this.Pa(r,_e((()=>t.delete()))),null!==e&&e.push(this.ja,r)}break;default:throw new z("Unsupporting sharing policy")}}return r}function ye(e,a){if(null===a){if(this.ya)throw new z(`null is not a valid ${this.name}`);return 0}if(!a.aa)throw new z(`Cannot pass "${J(a)}" as a ${this.name}`);if(!a.aa.ca)throw new z(`Cannot pass deleted object as a pointer of type ${this.name}`);if(a.aa.da.ua)throw new z(`Cannot convert argument of type ${a.aa.da.name} to parameter type ${this.name}`);return ve(a.aa.ca,a.aa.da.ba,this.ba)}function we(e,a,r,t,n,o,i,s,u,l,c){this.name=e,this.ba=a,this.ya=r,this.ua=t,this.va=n,this.Na=o,this.Ta=i,this.Da=s,this.za=u,this.Pa=l,this.ja=c,n||void 0!==a.ga?this.toWireType=me:(this.toWireType=t?ge:ye,this.ha=null)}var be,$e,Ae=(e,a,r)=>{if(!o.hasOwnProperty(e))throw new B("Replacing nonexistent public symbol");void 0!==o[e].ea&&void 0!==r?o[e].ea[r]=a:(o[e]=a,o[e].pa=r)},Te=[],Ce=(e,a)=>{e=X(e);var r=Te[a];if(r||(a>=Te.length&&(Te.length=a+1),Te[a]=r=be.get(a)),"function"!=typeof r)throw new z(`unknown function pointer with signature ${e}: ${a}`);return r},Pe=e=>{e=ya(e);var a=X(e);return ba(e),a},We=(e,a)=>{var r=[],t={};throw a.forEach((function e(a){t[a]||N[a]||(L[a]?L[a].forEach(e):(r.push(a),t[a]=!0))})),new $e(`${e}: `+r.map(Pe).join([", "]))};function Oe(e,a,r,t,n){var o=a.length;if(2>o)throw new z("argTypes array size mismatch! Must at least get return value and 'this' types!");var i=null!==a[1]&&null!==r,s=function(e){for(var a=1;a<e.length;++a)if(null!==e[a]&&void 0===e[a].ha)return!0;return!1}(a),u="void"!==a[0].name,l=o-2,c=Array(l),f=[],h=[];return fe(e,(function(){for(var r=arguments.length,o=new Array(r),d=0;d<r;d++)o[d]=arguments[d];if(o.length!==l)throw new z(`function ${e} called with ${o.length} arguments, expected ${l}`);if(h.length=0,f.length=i?2:1,f[0]=n,i){var p=a[1].toWireType(h,this);f[1]=p}for(var v=0;v<l;++v)c[v]=a[v+2].toWireType(h,o[v]),f.push(c[v]);if(o=t(...f),s)H(h);else for(v=i?1:2;v<a.length;v++){var g=1===v?p:c[v-2];null!==a[v].ha&&a[v].ha(g)}return u?a[0].fromWireType(o):void 0}))}var ke,Ee=(e,a)=>{for(var r=[],t=0;t<e;t++)r.push(w[a+4*t>>2]);return r},je=e=>{const a=(e=e.trim()).indexOf("(");return-1!==a?e.substr(0,a):e},Se=(e,a,r)=>{if(!(e instanceof Object))throw new z(`${r} with invalid "this": ${e}`);if(!(e instanceof a.ba.constructor))throw new z(`${r} incompatible with "this" of type ${e.constructor.name}`);if(!e.aa.ca)throw new z(`cannot call emscripten binding method ${r} on deleted object`);return ve(e.aa.ca,e.aa.da.ba,a.ba)},Fe=[],Me=[],De=e=>{9<e&&0==--Me[e+1]&&(Me[e]=void 0,Fe.push(e))},Ie=e=>{if(!e)throw new z("Cannot use deleted val. handle = "+e);return Me[e]},_e=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:const a=Fe.pop()||Me.length;return Me[a]=e,Me[a+1]=1,a}},Re={name:"emscripten::val",fromWireType:e=>{var a=Ie(e);return De(e),a},toWireType:(e,a)=>_e(a),argPackAdvance:8,readValueFromPointer:Y,ha:null},Ue=(e,a,r)=>{switch(a){case 1:return r?function(e){return this.fromWireType(p[e])}:function(e){return this.fromWireType(v[e])};case 2:return r?function(e){return this.fromWireType(g[e>>1])}:function(e){return this.fromWireType(m[e>>1])};case 4:return r?function(e){return this.fromWireType(y[e>>2])}:function(e){return this.fromWireType(w[e>>2])};default:throw new TypeError(`invalid integer width (${a}): ${e}`)}},xe=(e,a)=>{var r=N[e];if(void 0===r)throw e=`${a} has unknown type ${Pe(e)}`,new z(e);return r},He=(e,a)=>{switch(a){case 4:return function(e){return this.fromWireType(b[e>>2])};case 8:return function(e){return this.fromWireType(T[e>>3])};default:throw new TypeError(`invalid float width (${a}): ${e}`)}},Ye=(e,a,r,t)=>{if(0<t){t=r+t-1;for(var n=0;n<e.length;++n){var o=e.charCodeAt(n);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++n)),127>=o){if(r>=t)break;a[r++]=o}else{if(2047>=o){if(r+1>=t)break;a[r++]=192|o>>6}else{if(65535>=o){if(r+2>=t)break;a[r++]=224|o>>12}else{if(r+3>=t)break;a[r++]=240|o>>18,a[r++]=128|o>>12&63}a[r++]=128|o>>6&63}a[r++]=128|63&o}}a[r]=0}},Be=e=>{for(var a=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);127>=t?a++:2047>=t?a+=2:55296<=t&&57343>=t?(a+=4,++r):a+=3}return a},Ve="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,ze=(e,a,r)=>{var t=a+r;for(r=a;e[r]&&!(r>=t);)++r;if(16<r-a&&e.buffer&&Ve)return Ve.decode(e.subarray(a,r));for(t="";a<r;){var n=e[a++];if(128&n){var o=63&e[a++];if(192==(224&n))t+=String.fromCharCode((31&n)<<6|o);else{var i=63&e[a++];65536>(n=224==(240&n)?(15&n)<<12|o<<6|i:(7&n)<<18|o<<12|i<<6|63&e[a++])?t+=String.fromCharCode(n):(n-=65536,t+=String.fromCharCode(55296|n>>10,56320|1023&n))}}else t+=String.fromCharCode(n)}return t},qe="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Ne=(e,a)=>{for(var r=e>>1,t=r+a/2;!(r>=t)&&m[r];)++r;if(32<(r<<=1)-e&&qe)return qe.decode(v.subarray(e,r));for(r="",t=0;!(t>=a/2);++t){var n=g[e+2*t>>1];if(0==n)break;r+=String.fromCharCode(n)}return r},Le=(e,a,r)=>{if(r??=2147483647,2>r)return 0;var t=a;r=(r-=2)<2*e.length?r/2:e.length;for(var n=0;n<r;++n)g[a>>1]=e.charCodeAt(n),a+=2;return g[a>>1]=0,a-t},Ge=e=>2*e.length,Je=(e,a)=>{for(var r=0,t="";!(r>=a/4);){var n=y[e+4*r>>2];if(0==n)break;++r,65536<=n?(n-=65536,t+=String.fromCharCode(55296|n>>10,56320|1023&n)):t+=String.fromCharCode(n)}return t},Xe=(e,a,r)=>{if(r??=2147483647,4>r)return 0;var t=a;r=t+r-4;for(var n=0;n<e.length;++n){var o=e.charCodeAt(n);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++n)),y[a>>2]=o,(a+=4)+4>r)break}return y[a>>2]=0,a-t},Ze=e=>{for(var a=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);55296<=t&&57343>=t&&++r,a+=4}return a},Ke=(e,a,r)=>{var t=[];return e=e.toWireType(t,r),t.length&&(w[a>>2]=_e(t)),e},Qe=[],ea={},aa=e=>{var a=ea[e];return void 0===a?X(e):a},ra=()=>{function e(e){e.$$$embind_global$$$=e;var a="object"==typeof $$$embind_global$$$&&e.$$$embind_global$$$==e;return a||delete e.$$$embind_global$$$,a}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof n.c&&e(n.c)?$$$embind_global$$$=n.c:"object"==typeof self&&e(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")},ta=Reflect.construct,na={},oa=()=>{if(!ke){var e,a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:u||"./this.program"};for(e in na)void 0===na[e]?delete a[e]:a[e]=na[e];var r=[];for(e in a)r.push(`${e}=${a[e]}`);ke=r}return ke},ia=[null,[],[]],sa=e=>0==e%4&&(0!=e%100||0==e%400),ua=[31,29,31,30,31,30,31,31,30,31,30,31],la=[31,28,31,30,31,30,31,31,30,31,30,31];var ca,fa,ha=(e,a,r,t)=>{function n(e,a,r){for(e="number"==typeof e?e.toString():e||"";e.length<a;)e=r[0]+e;return e}function o(e,a){return n(e,a,"0")}function i(e,a){function r(e){return 0>e?-1:0<e?1:0}var t;return 0===(t=r(e.getFullYear()-a.getFullYear()))&&0===(t=r(e.getMonth()-a.getMonth()))&&(t=r(e.getDate()-a.getDate())),t}function s(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function u(e){var a=e.na;for(e=new Date(new Date(e.oa+1900,0,1).getTime());0<a;){var r=e.getMonth(),t=(sa(e.getFullYear())?ua:la)[r];if(!(a>t-e.getDate())){e.setDate(e.getDate()+a);break}a-=t-e.getDate()+1,e.setDate(1),11>r?e.setMonth(r+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1))}return r=new Date(e.getFullYear()+1,0,4),a=s(new Date(e.getFullYear(),0,4)),r=s(r),0>=i(a,e)?0>=i(r,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var l=w[t+40>>2];for(var c in t={Wa:y[t>>2],Va:y[t+4>>2],wa:y[t+8>>2],Aa:y[t+12>>2],xa:y[t+16>>2],oa:y[t+20>>2],ka:y[t+24>>2],na:y[t+28>>2],$a:y[t+32>>2],Ua:y[t+36>>2],Xa:l&&l?ze(v,l):""},r=r?ze(v,r):"",l={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})r=r.replace(new RegExp(c,"g"),l[c]);var f="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),h="January February March April May June July August September October November December".split(" ");for(c in l={"%a":e=>f[e.ka].substring(0,3),"%A":e=>f[e.ka],"%b":e=>h[e.xa].substring(0,3),"%B":e=>h[e.xa],"%C":e=>o((e.oa+1900)/100|0,2),"%d":e=>o(e.Aa,2),"%e":e=>n(e.Aa,2," "),"%g":e=>u(e).toString().substring(2),"%G":u,"%H":e=>o(e.wa,2),"%I":e=>(0==(e=e.wa)?e=12:12<e&&(e-=12),o(e,2)),"%j":e=>{for(var a=0,r=0;r<=e.xa-1;a+=(sa(e.oa+1900)?ua:la)[r++]);return o(e.Aa+a,3)},"%m":e=>o(e.xa+1,2),"%M":e=>o(e.Va,2),"%n":()=>"\n","%p":e=>0<=e.wa&&12>e.wa?"AM":"PM","%S":e=>o(e.Wa,2),"%t":()=>"\t","%u":e=>e.ka||7,"%U":e=>o(Math.floor((e.na+7-e.ka)/7),2),"%V":e=>{var a=Math.floor((e.na+7-(e.ka+6)%7)/7);if(2>=(e.ka+371-e.na-2)%7&&a++,a)53==a&&(4==(r=(e.ka+371-e.na)%7)||3==r&&sa(e.oa)||(a=1));else{a=52;var r=(e.ka+7-e.na-1)%7;(4==r||5==r&&sa(e.oa%400-1))&&a++}return o(a,2)},"%w":e=>e.ka,"%W":e=>o(Math.floor((e.na+7-(e.ka+6)%7)/7),2),"%y":e=>(e.oa+1900).toString().substring(2),"%Y":e=>e.oa+1900,"%z":e=>{var a=0<=(e=e.Ua);return e=Math.abs(e)/60,(a?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":e=>e.Xa,"%%":()=>"%"},r=r.replace(/%%/g,"\0\0"),l)r.includes(c)&&(r=r.replace(new RegExp(c,"g"),l[c](t)));return(c=function(e){var a=Array(Be(e)+1);return Ye(e,a,0,a.length),a}(r=r.replace(/\0\0/g,"%"))).length>a?0:(p.set(c,e),c.length-1)};B=o.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}};for(var da=Array(256),pa=0;256>pa;++pa)da[pa]=String.fromCharCode(pa);V=da,z=o.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Object.assign(ce.prototype,{isAliasOf:function(e){if(!(this instanceof ce&&e instanceof ce))return!1;var a=this.aa.da.ba,r=this.aa.ca;e.aa=e.aa;var t=e.aa.da.ba;for(e=e.aa.ca;a.ga;)r=a.sa(r),a=a.ga;for(;t.ga;)e=t.sa(e),t=t.ga;return a===t&&r===e},clone:function(){if(this.aa.ca||ee(this),this.aa.ra)return this.aa.count.value+=1,this;var e=le,a=Object,r=a.create,t=Object.getPrototypeOf(this),n=this.aa;return(e=e(r.call(a,t,{aa:{value:{count:n.count,qa:n.qa,ra:n.ra,ca:n.ca,da:n.da,fa:n.fa,ia:n.ia}}}))).aa.count.value+=1,e.aa.qa=!1,e},delete(){if(this.aa.ca||ee(this),this.aa.qa&&!this.aa.ra)throw new z("Object already scheduled for deletion");re(this);var e=this.aa;--e.count.value,0===e.count.value&&(e.fa?e.ia.ja(e.fa):e.da.ba.ja(e.ca)),this.aa.ra||(this.aa.fa=void 0,this.aa.ca=void 0)},isDeleted:function(){return!this.aa.ca},deleteLater:function(){if(this.aa.ca||ee(this),this.aa.qa&&!this.aa.ra)throw new z("Object already scheduled for deletion");return oe.push(this),1===oe.length&&K&&K(ie),this.aa.qa=!0,this}}),o.getInheritedInstanceCount=()=>Object.keys(se).length,o.getLiveInheritedInstances=()=>{var e,a=[];for(e in se)se.hasOwnProperty(e)&&a.push(se[e]);return a},o.flushPendingDeletes=ie,o.setDelayFunction=e=>{K=e,oe.length&&K&&K(ie)},Object.assign(we.prototype,{Ia(e){return this.Da&&(e=this.Da(e)),e},Ba(e){this.ja?.(e)},argPackAdvance:8,readValueFromPointer:Y,fromWireType:function(e){function a(){return this.va?ue(this.ba.la,{da:this.Na,ca:r,ia:this,fa:e}):ue(this.ba.la,{da:this,ca:e})}var r=this.Ia(e);if(!r)return this.Ba(e),null;var t=((e,a)=>{if(void 0===a)throw new z("ptr should not be undefined");for(;e.ga;)a=e.sa(a),e=e.ga;return se[a]})(this.ba,r);if(void 0!==t)return 0===t.aa.count.value?(t.aa.ca=r,t.aa.fa=e,t.clone()):(t=t.clone(),this.Ba(e),t);if(t=this.ba.Ha(r),!(t=ne[t]))return a.call(this);t=this.ua?t.Ea:t.pointerType;var n=te(r,this.ba,t.ba);return null===n?a.call(this):this.va?ue(t.ba.la,{da:t,ca:n,ia:this,fa:e}):ue(t.ba.la,{da:t,ca:n})}}),$e=o.UnboundTypeError=(ca=Error,(fa=fe("UnboundTypeError",(function(e){this.name="UnboundTypeError",this.message=e,void 0!==(e=Error(e).stack)&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}))).prototype=Object.create(ca.prototype),fa.prototype.constructor=fa,fa.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},fa),Me.push(0,1,void 0,1,null,1,!0,1,!1,1),o.count_emval_handles=()=>Me.length/2-5-Fe.length;var va,ga={m:(e,a,r)=>{var t=new U(e);throw w[t.ca+16>>2]=0,w[t.ca+4>>2]=a,w[t.ca+8>>2]=r,e},M:()=>{F("")},r:e=>{var a=x[e];delete x[e];var r=a.za,t=a.ja,n=a.Ca,o=n.map((e=>e.La)).concat(n.map((e=>e.Ra)));G([e],o,(e=>{var o={};return n.forEach(((a,r)=>{var t=e[r],i=a.Ja,s=a.Ka,u=e[r+n.length],l=a.Qa,c=a.Sa;o[a.Ga]={read:e=>t.fromWireType(i(s,e)),write:(e,a)=>{var r=[];l(c,e,u.toWireType(r,a)),H(r)}}})),[{name:a.name,fromWireType:e=>{var a,r={};for(a in o)r[a]=o[a].read(e);return t(e),r},toWireType:(e,a)=>{for(var n in o)if(!(n in a))throw new TypeError(`Missing field: "${n}"`);var i=r();for(n in o)o[n].write(i,a[n]);return null!==e&&e.push(t,i),i},argPackAdvance:8,readValueFromPointer:Y,ha:t}]}))},E:(e,a,r)=>{Z(e,{name:a=X(a),fromWireType:e=>e,toWireType:function(e,a){if("bigint"!=typeof a&&"number"!=typeof a)throw new TypeError(`Cannot convert "${J(a)}" to ${this.name}`);return"number"==typeof a&&(a=BigInt(a)),a},argPackAdvance:8,readValueFromPointer:Q(a,r,-1==a.indexOf("u")),ha:null})},S:(e,a,r,t)=>{Z(e,{name:a=X(a),fromWireType:function(e){return!!e},toWireType:function(e,a){return a?r:t},argPackAdvance:8,readValueFromPointer:function(e){return this.fromWireType(v[e])},ha:null})},f:(e,a,r,t,n,o,i,s,u,l,c,f,h)=>{c=X(c),o=Ce(n,o),s&&=Ce(i,s),l&&=Ce(u,l),h=Ce(f,h);var d=(e=>{if(void 0===e)return"_unknown";var a=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=a&&57>=a?`_${e}`:e})(c);de(d,(function(){We(`Cannot construct ${c} due to unbound types`,[t])})),G([e,a,r],t?[t]:[],(a=>{if(a=a[0],t)var r=a.ba,n=r.la;else n=ce.prototype;a=fe(c,(function(){if(Object.getPrototypeOf(this)!==i)throw new z("Use 'new' to construct "+c);if(void 0===f.ma)throw new z(c+" has no accessible constructor");for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];var t=f.ma[a.length];if(void 0===t)throw new z(`Tried to invoke ctor of ${c} with invalid number of parameters (${a.length}) - expected (${Object.keys(f.ma).toString()}) parameters instead!`);return t.apply(this,a)}));var i=Object.create(n,{constructor:{value:a}});a.prototype=i;var u,f=new pe(c,a,i,h,r,o,s,l);return f.ga&&((u=f.ga).ta??(u.ta=[]),f.ga.ta.push(f)),r=new we(c,f,!0,!1,!1),u=new we(c+"*",f,!1,!1,!1),n=new we(c+" const*",f,!1,!0,!1),ne[e]={pointerType:u,Ea:n},Ae(d,a),[r,u,n]}))},v:(e,a,r,t,n,o,i)=>{var s=Ee(r,t);a=X(a),a=je(a),o=Ce(n,o),G([],[e],(e=>{function t(){We(`Cannot call ${n} due to unbound types`,s)}var n=`${(e=e[0]).name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var u=e.ba.constructor;return void 0===u[a]?(t.pa=r-1,u[a]=t):(he(u,a,n),u[a].ea[r-1]=t),G([],s,(t=>{if(t=Oe(n,[t[0],null].concat(t.slice(1)),null,o,i),void 0===u[a].ea?(t.pa=r-1,u[a]=t):u[a].ea[r-1]=t,e.ba.ta)for(const r of e.ba.ta)r.constructor.hasOwnProperty(a)||(r.constructor[a]=t);return[]})),[]}))},g:(e,a,r,t,n,o)=>{var i=Ee(a,r);n=Ce(t,n),G([],[e],(e=>{var r=`constructor ${(e=e[0]).name}`;if(void 0===e.ba.ma&&(e.ba.ma=[]),void 0!==e.ba.ma[a-1])throw new z(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return e.ba.ma[a-1]=()=>{We(`Cannot construct ${e.name} due to unbound types`,i)},G([],i,(t=>(t.splice(1,0,null),e.ba.ma[a-1]=Oe(r,t,null,n,o),[]))),[]}))},a:(e,a,r,t,n,o,i,s)=>{var u=Ee(r,t);a=X(a),a=je(a),o=Ce(n,o),G([],[e],(e=>{function t(){We(`Cannot call ${n} due to unbound types`,u)}var n=`${(e=e[0]).name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),s&&e.ba.Oa.push(a);var l=e.ba.la,c=l[a];return void 0===c||void 0===c.ea&&c.className!==e.name&&c.pa===r-2?(t.pa=r-2,t.className=e.name,l[a]=t):(he(l,a,n),l[a].ea[r-2]=t),G([],u,(t=>(t=Oe(n,t,e,o,i),void 0===l[a].ea?(t.pa=r-2,l[a]=t):l[a].ea[r-2]=t,[]))),[]}))},c:(e,a,r,t,n,o,i,s,u,l)=>{a=X(a),n=Ce(t,n),G([],[e],(e=>{var t=`${(e=e[0]).name}.${a}`,c={get(){We(`Cannot access ${t} due to unbound types`,[r,i])},enumerable:!0,configurable:!0};return c.set=u?()=>We(`Cannot access ${t} due to unbound types`,[r,i]):()=>{throw new z(t+" is a read-only property")},Object.defineProperty(e.ba.la,a,c),G([],u?[r,i]:[r],(r=>{var i=r[0],c={get(){var a=Se(this,e,t+" getter");return i.fromWireType(n(o,a))},enumerable:!0};if(u){u=Ce(s,u);var f=r[1];c.set=function(a){var r=Se(this,e,t+" setter"),n=[];u(l,r,f.toWireType(n,a)),H(n)}}return Object.defineProperty(e.ba.la,a,c),[]})),[]}))},R:e=>Z(e,Re),n:(e,a,r,t)=>{function n(){}a=X(a),n.values={},Z(e,{name:a,constructor:n,fromWireType:function(e){return this.constructor.values[e]},toWireType:(e,a)=>a.value,argPackAdvance:8,readValueFromPointer:Ue(a,r,t),ha:null}),de(a,n)},e:(e,a,r)=>{var t=xe(e,"enum");a=X(a),e=t.constructor,t=Object.create(t.constructor.prototype,{value:{value:r},constructor:{value:fe(`${t.name}_${a}`,(function(){}))}}),e.values[r]=t,e[a]=t},D:(e,a,r)=>{Z(e,{name:a=X(a),fromWireType:e=>e,toWireType:(e,a)=>a,argPackAdvance:8,readValueFromPointer:He(a,r),ha:null})},U:(e,a,r,t,n,o)=>{var i=Ee(a,r);e=X(e),e=je(e),n=Ce(t,n),de(e,(function(){We(`Cannot call ${e} due to unbound types`,i)}),a-1),G([],i,(r=>(Ae(e,Oe(e,[r[0],null].concat(r.slice(1)),null,n,o),a-1),[])))},w:(e,a,r,t,n)=>{if(a=X(a),-1===n&&(n=4294967295),n=e=>e,0===t){var o=32-8*r;n=e=>e<<o>>>o}var i=a.includes("unsigned")?function(e,a){return a>>>0}:function(e,a){return a};Z(e,{name:a,fromWireType:n,toWireType:i,argPackAdvance:8,readValueFromPointer:Q(a,r,0!==t),ha:null})},o:(e,a,r)=>{function t(e){return new n(p.buffer,w[e+4>>2],w[e>>2])}var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][a];Z(e,{name:r=X(r),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{Ma:!0})},t:e=>{Z(e,Re)},i:(e,a,r,t,n,o,i,s,u,l,c,f)=>{r=X(r),o=Ce(n,o),s=Ce(i,s),l=Ce(u,l),f=Ce(c,f),G([e],[a],(e=>(e=e[0],[new we(r,e.ba,!1,!1,!0,e,t,o,s,l,f)])))},F:(e,a)=>{var r="std::string"===(a=X(a));Z(e,{name:a,fromWireType:function(e){var a=w[e>>2],t=e+4;if(r)for(var n=t,o=0;o<=a;++o){var i=t+o;if(o==a||0==v[i]){if(n=n?ze(v,n,i-n):"",void 0===s)var s=n;else s+=String.fromCharCode(0),s+=n;n=i+1}}else{for(s=Array(a),o=0;o<a;++o)s[o]=String.fromCharCode(v[t+o]);s=s.join("")}return ba(e),s},toWireType:function(e,a){a instanceof ArrayBuffer&&(a=new Uint8Array(a));var t="string"==typeof a;if(!(t||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array))throw new z("Cannot pass non-string to std::string");var n=r&&t?Be(a):a.length,o=wa(4+n+1),i=o+4;if(w[o>>2]=n,r&&t)Ye(a,v,i,n+1);else if(t)for(t=0;t<n;++t){var s=a.charCodeAt(t);if(255<s)throw ba(i),new z("String has UTF-16 code units that do not fit in 8 bits");v[i+t]=s}else for(t=0;t<n;++t)v[i+t]=a[t];return null!==e&&e.push(ba,o),o},argPackAdvance:8,readValueFromPointer:Y,ha(e){ba(e)}})},C:(e,a,r)=>{if(r=X(r),2===a)var t=Ne,n=Le,o=Ge,i=e=>m[e>>1];else 4===a&&(t=Je,n=Xe,o=Ze,i=e=>w[e>>2]);Z(e,{name:r,fromWireType:e=>{for(var r,n=w[e>>2],o=e+4,s=0;s<=n;++s){var u=e+4+s*a;s!=n&&0!=i(u)||(o=t(o,u-o),void 0===r?r=o:(r+=String.fromCharCode(0),r+=o),o=u+a)}return ba(e),r},toWireType:(e,t)=>{if("string"!=typeof t)throw new z(`Cannot pass non-string to C++ string type ${r}`);var i=o(t),s=wa(4+i+a);return w[s>>2]=i/a,n(t,s+4,i+a),null!==e&&e.push(ba,s),s},argPackAdvance:8,readValueFromPointer:Y,ha(e){ba(e)}})},s:(e,a,r,t,n,o)=>{x[e]={name:X(a),za:Ce(r,t),ja:Ce(n,o),Ca:[]}},j:(e,a,r,t,n,o,i,s,u,l)=>{x[e].Ca.push({Ga:X(a),La:r,Ja:Ce(t,n),Ka:o,Ra:i,Qa:Ce(s,u),Sa:l})},T:(e,a)=>{Z(e,{Ya:!0,name:a=X(a),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})},l:(e,a,r)=>(e=Ie(e),a=xe(a,"emval::as"),Ke(a,r,e)),y:(e,a)=>(e=Ie(e),(a=xe(a,"emval::as")).toWireType(null,e)),V:(e,a,r,t)=>(e=Qe[e])(null,a=Ie(a),r,t),B:(e,a,r,t,n)=>(e=Qe[e])(a=Ie(a),a[r=aa(r)],t,n),b:De,H:e=>0===e?_e(ra()):(e=aa(e),_e(ra()[e])),A:(e,a,r)=>{var t=((e,a)=>{for(var r=Array(e),t=0;t<e;++t)r[t]=xe(w[a+4*t>>2],"parameter "+t);return r})(e,a),n=t.shift();e--;var o=Array(e);return a=`methodCaller<(${t.map((e=>e.name)).join(", ")}) => ${n.name}>`,(e=>{var a=Qe.length;return Qe.push(e),a})(fe(a,((a,i,s,u)=>{for(var l=0,c=0;c<e;++c)o[c]=t[c].readValueFromPointer(u+l),l+=t[c].argPackAdvance;return a=1===r?ta(i,o):i.apply(a,o),Ke(n,s,a)})))},q:(e,a)=>(e=Ie(e),a=Ie(a),_e(e[a])),h:e=>{9<e&&(Me[e+1]+=1)},I:(e,a)=>(e=Ie(e))instanceof Ie(a),u:e=>"number"==typeof(e=Ie(e)),x:e=>"string"==typeof(e=Ie(e)),G:()=>_e([]),p:e=>_e(aa(e)),k:e=>{var a=Ie(e);H(a),De(e)},d:(e,a)=>(e=(e=xe(e,"_emval_take_value")).readValueFromPointer(a),_e(e)),z:e=>(e=Ie(e),_e(typeof e)),N:e=>{var a=v.length;if(2147483648<(e>>>=0))return!1;for(var r=1;4>=r;r*=2){var t=a*(1+.2/r);t=Math.min(t,e+100663296);var n=Math;t=Math.max(e,t);e:{n=(n.min.call(n,2147483648,t+(65536-t%65536)%65536)-d.buffer.byteLength+65535)/65536;try{d.grow(n),P();var o=1;break e}catch(i){}o=void 0}if(o)return!0}return!1},K:(e,a)=>{var r=0;return oa().forEach(((t,n)=>{var o=a+r;for(n=w[e+4*n>>2]=o,o=0;o<t.length;++o)p[n++]=t.charCodeAt(o);p[n]=0,r+=t.length+1})),0},L:(e,a)=>{var r=oa();w[e>>2]=r.length;var t=0;return r.forEach((e=>t+=e.length+1)),w[a>>2]=t,0},Q:()=>52,P:function(){return 70},O:(e,a,r,t)=>{for(var n=0,o=0;o<r;o++){var i=w[a>>2],s=w[a+4>>2];a+=8;for(var u=0;u<s;u++){var l=v[i+u],c=ia[e];0===l||10===l?((1===e?f:h)(ze(c,0)),c.length=0):c.push(l)}n+=s}return w[t>>2]=n,0},J:(e,a,r,t)=>ha(e,a,r,t)},ma=function(){function e(e){return ma=e.exports,d=ma.W,P(),be=ma.$,O.unshift(ma.X),j--,o.monitorRunDependencies?.(j),0==j&&S&&(e=S,S=null,e()),ma}var a={a:ga};if(j++,o.monitorRunDependencies?.(j),o.instantiateWasm)try{return o.instantiateWasm(a,e)}catch(fa){h(`Module.instantiateWasm callback failed with error: ${fa}`),t(fa)}return M||=D("arcgis-knowledge-client-core.wasm")?"arcgis-knowledge-client-core.wasm":o.locateFile?o.locateFile("arcgis-knowledge-client-core.wasm",l):l+"arcgis-knowledge-client-core.wasm",function(e,a){var r=M;return c||"function"!=typeof WebAssembly.instantiateStreaming||D(r)||"function"!=typeof fetch?_(r,e,a):fetch(r,{credentials:"same-origin"}).then((t=>WebAssembly.instantiateStreaming(t,e).then(a,(function(t){return h(`wasm streaming compile failed: ${t}`),h("falling back to ArrayBuffer instantiation"),_(r,e,a)}))))}(a,(function(a){e(a.instance)})).catch(t),{}}(),ya=e=>(ya=ma.Y)(e),wa=e=>(wa=ma.Z)(e),ba=e=>(ba=ma._)(e);function $a(){function e(){if(!va&&(va=!0,o.calledRun=!0,!C)){if(R(O),r(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;){var e=o.postRun.shift();k.unshift(e)}R(k)}}if(!(0<j)){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)E();R(W),0<j||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),e()}),1)):e())}}if(S=function e(){va||$a(),va||(S=e)},o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);0<o.preInit.length;)o.preInit.pop()();return $a(),i},e.exports=r),o.exports;var e,a,r}()),s=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=47751.ad0134ce.chunk.js.map