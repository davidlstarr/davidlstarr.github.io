import{d as n}from"./calcite-input-time-picker-CcSXbVNc.js";import"./index-CN4ACLGJ.js";import"./form-BPoI2TwP.js";import"./dom-CFD37C8e.js";import"./guid-DP-7rFCR.js";import"./interactive-CoPIaW86.js";import"./key-Dalt3dqL.js";import"./label-BjY-M-iJ.js";import"./component-thCpPSLC.js";import"./loadable-DovO8-bk.js";import"./t9n-CjLp0gCv.js";import"./observers-CP3uNsO3.js";import"./focusTrapComponent-CqweeTF6.js";import"./icon-BA3T62ZQ.js";import"./openCloseComponent-DyGVoXUK.js";import"./input-message-G-fABiTs.js";import"./input-ClukPQHf.js";import"./action-Cdl7229P.js";import"./loader-CtlgxS2A.js";import"./input-text-BdFeo2hn.js";import"./progress-Bq5-39Uo.js";import"./popover-Db1BQv1g.js";import"./floating-ui-CUhKo4FX.js";import"./debounce-BXUnv6U0.js";import"./Heading-NPxbW-Qq.js";import"./FloatingArrow-D-q0ZIVy.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */function a(t){return t%10<5&&t%10>1&&~~(t/10)%10!==1}function r(t,i,o){var e=t+" ";switch(o){case"m":return i?"minuta":"minutę";case"mm":return e+(a(t)?"minuty":"minut");case"h":return i?"godzina":"godzinę";case"hh":return e+(a(t)?"godziny":"godzin");case"MM":return e+(a(t)?"miesiące":"miesięcy");case"yy":return e+(a(t)?"lata":"lat")}}var _="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),p="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),s=/D MMMM/,m=function(i,o){return s.test(o)?_[i.month()]:p[i.month()]};m.s=p;m.f=_;var l={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:m,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:r,mm:r,h:r,hh:r,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:r,y:"rok",yy:r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};n.locale(l,null,!0);export{l as default};