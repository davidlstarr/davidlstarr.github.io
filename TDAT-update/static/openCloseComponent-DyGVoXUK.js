import{aB as r}from"./index-CN4ACLGJ.js";import{w as s}from"./dom-CFD37C8e.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const n=r;function i(e){return"opened"in e?e.opened:e.open}function f(e){n(()=>{e.transitionEl&&s(e.transitionEl,e.openTransitionProp,()=>{i(e)?e.onBeforeOpen():e.onBeforeClose()},()=>{i(e)?e.onOpen():e.onClose()})})}export{f as o};