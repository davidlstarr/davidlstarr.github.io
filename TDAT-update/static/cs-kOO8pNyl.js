import{d as _}from"./calcite-input-time-picker-CcSXbVNc.js";import"./index-CN4ACLGJ.js";import"./form-BPoI2TwP.js";import"./dom-CFD37C8e.js";import"./guid-DP-7rFCR.js";import"./interactive-CoPIaW86.js";import"./key-Dalt3dqL.js";import"./label-BjY-M-iJ.js";import"./component-thCpPSLC.js";import"./loadable-DovO8-bk.js";import"./t9n-CjLp0gCv.js";import"./observers-CP3uNsO3.js";import"./focusTrapComponent-CqweeTF6.js";import"./icon-BA3T62ZQ.js";import"./openCloseComponent-DyGVoXUK.js";import"./input-message-G-fABiTs.js";import"./input-ClukPQHf.js";import"./action-Cdl7229P.js";import"./loader-CtlgxS2A.js";import"./input-text-BdFeo2hn.js";import"./progress-Bq5-39Uo.js";import"./popover-Db1BQv1g.js";import"./floating-ui-CUhKo4FX.js";import"./debounce-BXUnv6U0.js";import"./Heading-NPxbW-Qq.js";import"./FloatingArrow-D-q0ZIVy.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */function o(e){return e>1&&e<5&&~~(e/10)!==1}function n(e,r,p,t){var m=e+" ";switch(p){case"s":return r||t?"pár sekund":"pár sekundami";case"m":return r?"minuta":t?"minutu":"minutou";case"mm":return r||t?m+(o(e)?"minuty":"minut"):m+"minutami";case"h":return r?"hodina":t?"hodinu":"hodinou";case"hh":return r||t?m+(o(e)?"hodiny":"hodin"):m+"hodinami";case"d":return r||t?"den":"dnem";case"dd":return r||t?m+(o(e)?"dny":"dní"):m+"dny";case"M":return r||t?"měsíc":"měsícem";case"MM":return r||t?m+(o(e)?"měsíce":"měsíců"):m+"měsíci";case"y":return r||t?"rok":"rokem";case"yy":return r||t?m+(o(e)?"roky":"let"):m+"lety"}}var s={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};_.locale(s,null,!0);export{s as default};