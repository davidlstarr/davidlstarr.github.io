"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[3245],{3245:(e,t,n)=>{n.r(t),n.d(t,{executeScript:()=>H,extend:()=>Q,functionHelper:()=>V});var r=n(66240),o=n(54093),a=n(82214),i=n(36593),l=n(67253),s=n(9861),c=n(48015),u=n(55742),f=n(43036),w=n(8167),p=n(302),d=n(29759),h=n(25811),g=n(19155),y=n(50568),v=n(12476),m=n(84231),b=n(89189),D=n(13312);const X=100;async function T(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await R(e,t.arguments[r]));return n}async function S(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await T(e,t))}class $ extends u.fF{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){var t=this;return function(){const n={spatialReference:t.context.spatialReference,console:t.context.console,lrucache:t.context.lrucache,timeZone:t.context.timeZone??null,exports:t.context.exports,libraryResolver:t.context.libraryResolver,interceptor:t.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:t.context.globalScope};if(n.depthCounter.depth>64)throw new s.D$(e,s.TX.MaximumCallDepth,null);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return G(t.definition,n,o,null)}}call(e,t){return A(e,t,((n,r,o)=>{const a={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(a.depthCounter.depth>64)throw new s.D$(e,s.TX.MaximumCallDepth,t);return G(this.definition,a,o,t)}))}marshalledCall(e,t,n,r){return r(e,t,(async(o,a,i)=>{const l={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return i=i.map((t=>!(0,f.i)(t)||t instanceof u.CU?t:(0,u.o6)(t,e,r))),(0,u.o6)(await G(this.definition,l,i,t),n,r)}))}}class x extends o.x{constructor(e){super(),this.source=e}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await R(this.executingContext,t.node),t.valueset=!0),(0,f.i)(t.value)&&!(t.value instanceof u.CU)){const e=new u.CU;e.fn=t.value,e.parameterEvaluator=A,e.context=this.executingContext,t.value=e}return t.value}setGlobal(e,t){if((0,f.i)(t))throw new s.D$(null,s.TX.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}async loadModule(e){let t=e.spatialReference;null==t&&(t=new D.A({wkid:102100})),this.moduleScope=_({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new a.a(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??W,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await O(this.executingContext,this.source.syntax)}}async function A(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await T(e,t))}async function R(e,t){t.breakpoint&&await t.breakpoint();try{switch(t.type){case"UpdateExpression":return await async function(e,t){const n=t.argument;if("CallExpression"===n.type)throw new s.D$(e,s.TX.NeverReach,t);if("MemberExpression"===n.type){const r=await R(e,n.object);let o,a;if(!0===n.computed)o=await R(e,n.property);else{if("Identifier"!==n.property.type)throw new s.D$(e,s.TX.Unrecognized,t);o=n.property.name}if((0,f.o)(r)){if(!(0,f.b)(o))throw new s.D$(e,s.TX.ArrayAccessorMustBeNumber,t);if(o<0&&(o=r.length+o),o<0||o>=r.length)throw new s.D$(e,s.TX.OutOfBounds,t);a=(0,f.g)(r[o]),r[o]="++"===t.operator?a+1:a-1}else if(r instanceof l.A){if(!1===(0,f.c)(o))throw new s.D$(e,s.TX.KeyAccessorMustBeString,t);if(!0!==r.hasField(o))throw new s.D$(e,s.TX.FieldNotFound,t,{key:o});a=(0,f.g)(r.field(o)),r.setField(o,"++"===t.operator?a+1:a-1)}else if(r instanceof x){if(!1===(0,f.c)(o))throw new s.D$(e,s.TX.ModuleAccessorMustBeString,t);if(!0!==r.hasGlobal(o))throw new s.D$(e,s.TX.ModuleExportNotFound,t);a=(0,f.g)(await r.global(o)),r.setGlobal(o,"++"===t.operator?a+1:a-1)}else{if(!(0,f.r)(r))throw(0,f.q)(r)?new s.D$(e,s.TX.Immutable,t):new s.D$(e,s.TX.InvalidParameter,t);if(!1===(0,f.c)(o))throw new s.D$(e,s.TX.KeyAccessorMustBeString,t);if(!0!==r.hasField(o))throw new s.D$(e,s.TX.FieldNotFound,t,{key:o});a=(0,f.g)(r.field(o)),r.setField(o,"++"===t.operator?a+1:a-1)}return!1===t.prefix?a:"++"===t.operator?a+1:a-1}const o=(0,r.X)(n);let a;if(null!=e.localScope&&void 0!==e.localScope[o])return a=(0,f.g)(e.localScope[o].value),e.localScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},!1===t.prefix?a:"++"===t.operator?a+1:a-1;if(void 0!==e.globalScope[o])return a=(0,f.g)(e.globalScope[o].value),e.globalScope[o]={value:"++"===t.operator?a+1:a-1,valueset:!0,node:t},!1===t.prefix?a:"++"===t.operator?a+1:a-1;throw new s.D$(e,s.TX.InvalidIdentifier,t)}(e,t);case"AssignmentExpression":return await async function(e,t){const n=t.left;if("MemberExpression"===n.type){const r=await R(e,n.object);let o;if(!0===n.computed)o=await R(e,n.property);else{if("Identifier"!==n.property.type)throw new s.D$(e,s.TX.InvalidIdentifier,t);o=n.property.name}const a=await R(e,t.right);if((0,f.o)(r)){if(!(0,f.b)(o))throw new s.D$(e,s.TX.ArrayAccessorMustBeNumber,t);if(o<0&&(o=r.length+o),o<0||o>r.length)throw new s.D$(e,s.TX.OutOfBounds,t);if(o===r.length){if("="!==t.operator)throw new s.D$(e,s.TX.OutOfBounds,t);r[o]=B(a,t.operator,r[o],t,e)}else r[o]=B(a,t.operator,r[o],t,e)}else if(r instanceof l.A){if(!1===(0,f.c)(o))throw new s.D$(e,s.TX.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,B(a,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new s.D$(e,s.TX.FieldNotFound,t,{key:o});r.setField(o,B(a,t.operator,null,t,e))}}else if(r instanceof x){if(!1===(0,f.c)(o))throw new s.D$(e,s.TX.KeyAccessorMustBeString,t);if(!0!==r.hasGlobal(o))throw new s.D$(e,s.TX.ModuleExportNotFound,t);r.setGlobal(o,B(a,t.operator,await r.global(o),t,e))}else{if(!(0,f.r)(r))throw(0,f.q)(r)?new s.D$(e,s.TX.Immutable,t):new s.D$(e,s.TX.InvalidParameter,t);if(!1===(0,f.c)(o))throw new s.D$(e,s.TX.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,B(a,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new s.D$(e,s.TX.FieldNotFound,t,{key:o});r.setField(o,B(a,t.operator,null,t,e))}}return f.z}const o=(0,r.X)(n);if(null!=e.localScope&&void 0!==e.localScope[o]){const n=await R(e,t.right);return e.localScope[o]={value:B(n,t.operator,e.localScope[o].value,t,e),valueset:!0,node:t.right},f.z}if(void 0!==e.globalScope[o]){const n=await R(e,t.right);return e.globalScope[o]={value:B(n,t.operator,e.globalScope[o].value,t,e),valueset:!0,node:t.right},f.z}throw new s.D$(e,s.TX.InvalidIdentifier,t)}(e,t);case"TemplateLiteral":return await async function(e,t){let n="",r=0;for(const o of t.quasis)if(n+=o.value?o.value.cooked:"",!1===o.tail){if(t.expressions[r]){const o=await R(e,t.expressions[r]);if((0,f.i)(o))throw new s.D$(e,s.TX.NoFunctionInTemplateLiteral,t);n+=(0,f.j)(o)}r++}return n}(e,t);case"Identifier":return await U(e,t);case"MemberExpression":return await async function(e,t){const n=await R(e,t.object);if(null===n)throw new s.D$(e,s.TX.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(n instanceof l.A||(0,f.r)(n))return n.field(t.property.name);if(n instanceof b.A)return(0,i.B)(n,t.property.name,e,t);if(n instanceof x){if(!n.hasGlobal(t.property.name))throw new s.D$(e,s.TX.InvalidIdentifier,t);return n.global(t.property.name)}throw new s.D$(e,s.TX.InvalidMemberAccessKey,t)}throw new s.D$(e,s.TX.InvalidMemberAccessKey,t)}let r=await R(e,t.property);if(n instanceof l.A||(0,f.r)(n)){if((0,f.c)(r))return n.field(r);throw new s.D$(e,s.TX.InvalidMemberAccessKey,t)}if(n instanceof x){if((0,f.c)(r))return n.global(r);throw new s.D$(e,s.TX.InvalidMemberAccessKey,t)}if(n instanceof b.A){if((0,f.c)(r))return(0,i.B)(n,r,e,t);throw new s.D$(e,s.TX.InvalidMemberAccessKey,t)}if((0,f.o)(n)){if((0,f.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new s.D$(e,s.TX.OutOfBounds,t);return n[r]}throw new s.D$(e,s.TX.InvalidMemberAccessKey,t)}if((0,f.q)(n)){if((0,f.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new s.D$(e,s.TX.OutOfBounds,t);return n.get(r)}throw new s.D$(e,s.TX.InvalidMemberAccessKey,t)}if((0,f.c)(n)){if((0,f.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new s.D$(e,s.TX.OutOfBounds,t);return n[r]}throw new s.D$(e,s.TX.InvalidMemberAccessKey,t)}throw new s.D$(e,s.TX.InvalidMemberAccessKey,t)}(e,t);case"Literal":return t.value;case"CallExpression":return await async function(e,t){if("MemberExpression"===t.callee.type){const n=await R(e,t.callee.object);if(!(n instanceof x))throw new s.D$(e,s.TX.FunctionNotFound,t);const r=!1===t.callee.computed?t.callee.property.name:await R(e,t.callee.property);if(!n.hasGlobal(r))throw new s.D$(e,s.TX.FunctionNotFound,t);const o=await n.global(r);if(!(0,f.i)(o))throw new s.D$(e,s.TX.CallNonFunction,t);return o.call(e,t)}if("Identifier"!==t.callee.type)throw new s.D$(e,s.TX.FunctionNotFound,t);const n=(0,r.X)(t.callee);if(null!=e.localScope&&void 0!==e.localScope[n]){const r=e.localScope[n];if((0,f.i)(r.value))return r.value.call(e,t);throw new s.D$(e,s.TX.CallNonFunction,t)}if(void 0!==e.globalScope[n]){const r=e.globalScope[n];if((0,f.i)(r.value))return r.value.call(e,t);throw new s.D$(e,s.TX.CallNonFunction,t)}throw new s.D$(e,s.TX.FunctionNotFound,t)}(e,t);case"UnaryExpression":return await async function(e,t){const n=await R(e,t.argument);if((0,f.a)(n)){if("!"===t.operator)return!n;if("-"===t.operator)return-1*(0,f.g)(n);if("+"===t.operator)return 1*(0,f.g)(n);if("~"===t.operator)return~(0,f.g)(n);throw new s.D$(e,s.TX.UnsupportedUnaryOperator,t)}if("-"===t.operator)return-1*(0,f.g)(n);if("+"===t.operator)return 1*(0,f.g)(n);if("~"===t.operator)return~(0,f.g)(n);throw new s.D$(e,s.TX.UnsupportedUnaryOperator,t)}(e,t);case"BinaryExpression":return await async function(e,t){const n=await R(e,t.left),r=await R(e,t.right);switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return(0,f.F)((0,f.g)(n),(0,f.g)(r),t.operator);case"==":return(0,f.E)(n,r);case"!=":return!(0,f.E)(n,r);case"<":case">":case"<=":case">=":return(0,f.D)(n,r,t.operator);case"+":return(0,f.c)(n)||(0,f.c)(r)?(0,f.j)(n)+(0,f.j)(r):(0,f.g)(n)+(0,f.g)(r);case"-":return(0,f.g)(n)-(0,f.g)(r);case"*":return(0,f.g)(n)*(0,f.g)(r);case"/":return(0,f.g)(n)/(0,f.g)(r);case"%":return(0,f.g)(n)%(0,f.g)(r);default:throw new s.D$(e,s.TX.UnsupportedOperator,t)}}(e,t);case"LogicalExpression":return await async function(e,t){const n=await R(e,t.left);if(!(0,f.a)(n))throw new s.D$(e,s.TX.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":{if(!0===n)return n;const r=await R(e,t.right);if((0,f.a)(r))return r;throw new s.D$(e,s.TX.LogicExpressionOrAnd,t)}case"&&":{if(!1===n)return n;const r=await R(e,t.right);if((0,f.a)(r))return r;throw new s.D$(e,s.TX.LogicExpressionOrAnd,t)}default:throw new s.D$(e,s.TX.LogicExpressionOrAnd,t)}}(e,t);case"ArrayExpression":return await async function(e,t){const n=[];for(let r=0;r<t.elements.length;r++)n.push(await R(e,t.elements[r]));for(let r=0;r<n.length;r++){if((0,f.i)(n[r]))throw new s.D$(e,s.TX.NoFunctionInArray,t);n[r]===f.z&&(n[r]=null)}return n}(e,t);case"ObjectExpression":return await async function(e,t){const n=[];for(let i=0;i<t.properties.length;i++){const r=t.properties[i],o=await R(e,r.value),a="Identifier"===r.key.type?r.key.name:await R(e,r.key);n[i]={key:a,value:o}}const r={},o=new Map;for(let i=0;i<n.length;i++){const a=n[i];if((0,f.i)(a.value))throw new s.D$(e,s.TX.NoFunctionInDictionary,t);if(!1===(0,f.c)(a.key))throw new s.D$(e,s.TX.KeyMustBeString,t);let l=a.key.toString();const c=l.toLowerCase();o.has(c)?l=o.get(c):o.set(c,l),a.value===f.z?r[l]=null:r[l]=a.value}const a=new l.A(r);return a.immutable=!1,a}(e,t);default:throw new s.D$(e,s.TX.Unrecognized,t)}}catch(n){throw(0,s.Nh)(e,t,n)}}async function I(e,t){t.breakpoint&&await t.breakpoint();try{switch(t.type){case"ImportDeclaration":return await async function(e,t){const n=(0,r.X)(t.specifiers[0].local),o=e.libraryResolver.loadLibrary(n);let a;return e.libraryResolver._moduleSingletons?.has(o.uri)?a=e.libraryResolver._moduleSingletons.get(o.uri):(a=new x(o),await a.loadModule(e),e.libraryResolver._moduleSingletons?.set(o.uri,a)),e.globalScope[n]={value:a,valueset:!0,node:t},f.z}(e,t);case"ExportNamedDeclaration":return await async function(e,t){if(await I(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[(0,r.X)(t.declaration.id)]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[(0,r.X)(n.id)]="variable";return f.z}(e,t);case"VariableDeclaration":return await j(e,t,0);case"BlockStatement":return await O(e,t);case"FunctionDeclaration":return await async function(e,t){const n=(0,r.X)(t.id);return e.globalScope[n]={valueset:!0,node:null,value:new $(t,e)},f.z}(e,t);case"ReturnStatement":return await async function(e,t){if(null===t.argument)return new f.R(f.z);const n=await R(e,t.argument);return new f.R(n)}(e,t);case"IfStatement":return await async function(e,t){const n=await R(e,t.test);if(!0===n)return I(e,t.consequent);if(!1===n)return null!==t.alternate?I(e,t.alternate):f.z;throw new s.D$(e,s.TX.BooleanConditionRequired,t)}(e,t);case"ExpressionStatement":return await async function(e,t){const n=await R(e,t.expression);return n===f.z?f.z:new f.I(n)}(e,t);case"ForStatement":return await async function(e,t){try{return null!==t.init&&("VariableDeclaration"===t.init.type?await I(e,t.init):await R(e,t.init)),await new Promise(((n,r)=>{C(e,t,{testResult:!0,lastAction:f.z},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(n){throw n}}(e,t);case"WhileStatement":return await async function(e,t){const n={testResult:!0,lastAction:f.z};if(n.testResult=await R(e,t.test),!1===n.testResult)return f.z;if(!0!==n.testResult)throw new s.D$(e,s.TX.BooleanConditionRequired,t);for(;!0===n.testResult&&(n.lastAction=await I(e,t.body),n.lastAction!==f.A)&&!(n.lastAction instanceof f.R);)if(n.testResult=await R(e,t.test),!0!==n.testResult&&!1!==n.testResult)throw new s.D$(e,s.TX.BooleanConditionRequired,t);return n.lastAction instanceof f.R?n.lastAction:f.z}(e,t);case"ForInStatement":return await async function(e,t){return new Promise(((n,o)=>{R(e,t.right).then((a=>{try{let i;i="VariableDeclaration"===t.left.type?I(e,t.left):Promise.resolve(),i.then((()=>{try{const i=(0,r.X)("VariableDeclaration"===t.left.type?t.left.declarations[0].id:t.left);let c=null;if(null!=e.localScope&&void 0!==e.localScope[i]&&(c=e.localScope[i]),null===c&&void 0!==e.globalScope[i]&&(c=e.globalScope[i]),null===c)return void o(new s.D$(e,s.TX.InvalidIdentifier,t));(0,f.o)(a)||(0,f.c)(a)?N(e,t,a,{reject:o,resolve:n},c):(0,f.q)(a)?function(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length())return void r.resolve(f.z);z(e,t,n,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(i){r.reject(i)}}(e,t,a,{reject:o,resolve:n},c):a instanceof l.A||(0,f.r)(a)?function(e,t,n,r,o){try{N(e,t,n.keys(),r,o,"k")}catch(a){r.reject(a)}}(e,t,a,{reject:o,resolve:n},c):(0,f.u)(a)?k(a.iterator(e.abortSignal),e,t,a,c,(e=>{n(e)}),(e=>{o(e)}),0):N(e,t,[],{reject:o,resolve:n},c)}catch(i){o(i)}}),o)}catch(i){o(i)}}),o)}))}(e,t);case"BreakStatement":return f.A;case"EmptyStatement":return f.z;case"ContinueStatement":return f.B;default:throw new s.D$(e,s.TX.Unrecognized,t)}}catch(n){throw(0,s.Nh)(e,t,n)}}async function F(e,t,n){const r=await I(e,t.body);return n.lastAction=r,n.lastAction===f.A||n.lastAction instanceof f.R?(n.testResult=!1,n):null!==t.update?(await R(e,t.update),n):n}function C(e,t,n,r,o,a){try{(async function(e,t,n){if(null!==t.test){const r=await R(e,t.test);if(!0===e.abortSignal?.aborted)throw new s.D$(e,s.TX.Cancelled,t);if(n.testResult=r,!1===n.testResult)return n;if(!0!==n.testResult)throw new s.D$(e,s.TX.BooleanConditionRequired,t);return F(e,t,n)}return F(e,t,n)})(e,t,n).then((()=>{try{!0===n.testResult?++a>X?(a=0,setTimeout((()=>{C(e,t,n,r,o,a)}),0)):C(e,t,n,r,o,a):n.lastAction instanceof f.R?r(n.lastAction):r(f.z)}catch(i){o(i)}}),(e=>{o(e)}))}catch(i){o(i)}}function M(e,t,n,r,o,a,i,l,s,c){try{if(r<=a)return void l(f.z);o.value="k"===i?n[a]:a,I(e,t.body).then((u=>{try{u instanceof f.R?l(u):u===f.A?l(f.z):++c>X?(c=0,setTimeout((()=>{M(e,t,n,r,o,a+1,i,l,s,c)}),0)):M(e,t,n,r,o,a+1,i,l,s,c)}catch(w){s(w)}}),(e=>{s(e)}))}catch(u){s(u)}}function z(e,t,n,r,o,a,i,l,s){try{if(n.length()<=o)return void i(f.z);r.value="k"===a?n.get(o):o,I(e,t.body).then((c=>{c instanceof f.R?i(c):c===f.A?i(f.z):++s>X?(s=0,setTimeout((()=>{z(e,t,n,r,o+1,a,i,l,s)}),0)):z(e,t,n,r,o+1,a,i,l,s)}),(e=>{l(e)}))}catch(c){l(c)}}function N(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(f.z);M(e,t,n,n.length,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(i){r.reject(i)}}function k(e,t,n,r,o,a,i,l){try{e.next().then((s=>{try{if(null===s)a(f.z);else{const u=c.A.createFromGraphicLikeObject(s.geometry,s.attributes,r,t.timeZone);u._underlyingGraphic=s,o.value=u,I(t,n.body).then((s=>{try{s===f.A?a(f.z):s instanceof f.R?a(s):++l>X?(l=0,setTimeout((()=>{k(e,t,n,r,o,a,i,l)}),0)):k(e,t,n,r,o,a,i,l)}catch(c){i(c)}}),(e=>{i(e)}))}}catch(u){i(u)}}),(e=>{i(e)}))}catch(s){i(s)}}function B(e,t,n,r,o){switch(t){case"=":return e===f.z?null:e;case"/=":return(0,f.g)(n)/(0,f.g)(e);case"*=":return(0,f.g)(n)*(0,f.g)(e);case"-=":return(0,f.g)(n)-(0,f.g)(e);case"+=":return(0,f.c)(n)||(0,f.c)(e)?(0,f.j)(n)+(0,f.j)(e):(0,f.g)(n)+(0,f.g)(e);case"%=":return(0,f.g)(n)%(0,f.g)(e);default:throw new s.D$(o,s.TX.UnsupportedOperator,r)}}async function O(e,t){return E(e,t,0)}async function E(e,t,n){if(n>=t.body.length)return f.z;const r=await I(e,t.body[n]);return r instanceof f.R||r===f.A||r===f.B||n===t.body.length-1?r:E(e,t,n+1)}async function j(e,t,n){return n>=t.declarations.length||(await async function(e,t){let n=null;if(n=null===t.init?null:await R(e,t.init),null!==e.localScope){if(n===f.z&&(n=null),"Identifier"!==t.id.type)throw new s.D$(e,s.TX.InvalidIdentifier,t);const o=(0,r.X)(t.id);return void(null!=e.localScope&&(e.localScope[o]={value:n,valueset:!0,node:t.init}))}if("Identifier"!==t.id.type)throw new s.D$(e,s.TX.InvalidIdentifier,t);const o=(0,r.X)(t.id);n===f.z&&(n=null),e.globalScope[o]={value:n,valueset:!0,node:t.init}}(e,t.declarations[n]),n===t.declarations.length-1||await j(e,t,n+1)),f.z}async function U(e,t){const n=(0,r.X)(t);if(null!=e.localScope&&void 0!==e.localScope[n]){const t=e.localScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=R(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==e.globalScope[n]){const t=e.globalScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=R(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new s.D$(e,s.TX.InvalidIdentifier,t)}const K={};async function q(e,t,n,r){const o=await R(e,t.arguments[n]);if((0,f.E)(o,r))return R(e,t.arguments[n+1]);const a=t.arguments.length-n;return 1===a?R(e,t.arguments[n]):2===a?null:3===a?R(e,t.arguments[n+2]):q(e,t,n+2,r)}async function L(e,t,n,r){if(!0===r)return R(e,t.arguments[n+1]);if(3===t.arguments.length-n)return R(e,t.arguments[n+2]);const o=await R(e,t.arguments[n+2]);if(!1===(0,f.a)(o))throw new s.D$(e,s.TX.ModuleExportNotFound,t.arguments[n+2]);return L(e,t,n+2,o)}async function G(e,t,n,o){const a=e.body;if(n.length!==e.params.length)throw new s.D$(t,s.TX.WrongNumberOfParameters,null);for(let l=0;l<n.length;l++){const o=e.params[l];"Identifier"===o.type&&null!=t.localScope&&(t.localScope[(0,r.X)(o)]={d:null,value:n[l],valueset:!0,node:null})}const i=await I(t,a);if(i instanceof f.R)return i.value;if(i===f.A)throw new s.D$(t,s.TX.UnexpectedToken,o);if(i===f.B)throw new s.D$(t,s.TX.UnexpectedToken,o);return i instanceof f.I?i.value:i}(0,d.d)(K,S),(0,m.d)(K,S),(0,y.d)(K,S),(0,g.d)(K,S),(0,v.d)(K,S),(0,h.registerFunctions)({functions:K,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:S,standardFunctionAsync:A}),K.iif=async function(e,t){(0,f.G)(null===t.arguments?[]:t.arguments,3,3,e,t);const n=await R(e,t.arguments[0]);if(!1===(0,f.a)(n))throw new s.D$(e,s.TX.BooleanConditionRequired,t);return R(e,n?t.arguments[1]:t.arguments[2])},K.defaultvalue=async function(e,t){(0,f.G)(null===t.arguments?[]:t.arguments,2,3,e,t);const n=await R(e,t.arguments[0]);if(3===t.arguments.length){const r=await R(e,t.arguments[1]),o=(0,i.j)(n,r);return null!=o&&""!==o?o:R(e,t.arguments[2])}return null==n||""===n?R(e,t.arguments[1]):n},K.decode=async function(e,t){if(t.arguments.length<2)throw new s.D$(e,s.TX.WrongNumberOfParameters,t);if(2===t.arguments.length)return R(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new s.D$(e,s.TX.WrongNumberOfParameters,t);return q(e,t,1,await R(e,t.arguments[0]))},K.when=async function(e,t){if(t.arguments.length<3)throw new s.D$(e,s.TX.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new s.D$(e,s.TX.WrongNumberOfParameters,t);const n=await R(e,t.arguments[0]);if(!1===(0,f.a)(n))throw new s.D$(e,s.TX.BooleanConditionRequired,t.arguments[0]);return L(e,t,0,n)};const Z={fixSpatialReference:f.x,parseArguments:T,standardFunction:S,standardFunctionAsync:A,evaluateIdentifier:U};for(const Y in K)K[Y]={value:new u.UQ(K[Y]),valueset:!0,node:null};const P=function(){};function _(e,t,n){const r=new P;null==e&&(e={}),null==t&&(t={});const o=new l.A({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(const a in t)r[a]={value:new u.UQ(t[a]),native:!0,valueset:!0,node:null};for(const a in e)r[a]={value:(0,f.C)(e[a])?c.A.createFromGraphic(e[a],n):e[a],valueset:!0,node:null};return r}function W(e){console.log(e)}P.prototype=K,P.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},P.prototype.pi={value:Math.PI,valueset:!0,node:null};const V=Z;function Q(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:S,standardFunctionAsync:A,evaluateIdentifier:U};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)K[n]={value:new u.UQ(t.functions[n]),valueset:!0,node:null},P.prototype[n]=K[n];for(let n=0;n<t.signatures.length;n++)(0,w.WC)(t.signatures[n],"async")}async function H(e,t){let n=t.spatialReference;null==n&&(n=new D.A({wkid:102100}));let r=null;e.usesModules&&(r=new a.a(new Map,e.loadedModules));const o=_(t.vars,t.customfunctions,t.timeZone),i={spatialReference:n,services:t.services,exports:{},libraryResolver:r,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:o,console:t.console??W,timeZone:t.timeZone??null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}},l=await O(i,e);if(l instanceof f.R||l instanceof f.I){const e=l.value;if(e===f.z)return null;if((0,f.i)(e))throw new s.D$(i,s.TX.IllegalResult,null);return e}if(l===f.z)return null;if(l===f.A)throw new s.D$(i,s.TX.IllegalResult,null);if(l===f.B)throw new s.D$(i,s.TX.IllegalResult,null);throw new s.D$(i,s.TX.NeverReach,null)}Q([p.A])}}]);
//# sourceMappingURL=3245.cb52345f.chunk.js.map