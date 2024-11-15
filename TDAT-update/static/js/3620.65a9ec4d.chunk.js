"use strict";(self.webpackChunkegis_tdat=self.webpackChunkegis_tdat||[]).push([[3620],{46405:(e,t,s)=>{s.d(t,{lY:()=>l,mT:()=>h});var r,n=s(88685),a=s(64920),i=s(24241);(r||(r={})).TimeZoneNotRecognized="TimeZoneNotRecognized";const o={[r.TimeZoneNotRecognized]:"Timezone identifier has not been recognized."};class c extends Error{constructor(e,t){super((0,n.HC)(o[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,c)}}function u(e,t,s){return e<t?e-t:e>s?e-s:0}function m(e,t,s){return e<t?t:e>s?s:e}class l{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,c=arguments.length>7?arguments[7]:void 0;if(isNaN(e)||isNaN(t)||isNaN(s)||isNaN(r)||isNaN(n)||isNaN(a)||isNaN(o))return null;const d=i.c9.local(e,t).daysInMonth;let f=i.c9.fromObject({day:m(s,1,d),year:e,month:m(t,1,12),hour:m(r,0,23),minute:m(n,0,59),second:m(a,0,59),millisecond:m(o,0,999)},{zone:h(c)});return f=f.plus({months:u(t,1,12),days:u(s,1,d),hours:u(r,0,23),minutes:u(n,0,59),seconds:u(a,0,59),milliseconds:u(o,0,999)}),new l(f)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,t){const s=h(t);return e.isUnknownTimeZone||s===a.GB.instance?l.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,s):new l(e._date.setZone(s))}static dateJSToArcadeDate(e){return new l(i.c9.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e){const t=h(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"system");return new l(i.c9.fromJSDate(e,{zone:t}))}static unknownEpochToArcadeDate(e){return new l(i.c9.fromMillis(e,{zone:a.GB.instance}))}static unknownDateJSToArcadeDate(e){return new l(i.c9.fromMillis(e.getTime(),{zone:a.GB.instance}))}static epochToArcadeDate(e){const t=h(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"system");return new l(i.c9.fromMillis(e,{zone:t}))}static dateTimeToArcadeDate(e){return new l(e)}clone(){return new l(this._date)}changeTimeZone(e){const t=h(e);return l.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,t){const s=h(t);return e.zone===a.GB.instance||s===a.GB.instance?l.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,s):new l(e.setZone(s))}static nowToArcadeDate(e){const t=h(e);return new l(i.c9.fromJSDate(new Date,{zone:t}))}static nowUTCToArcadeDate(){return new l(i.c9.utc())}get isSystem(){return"system"===this.timeZone||this.timeZone===l.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===a.GB.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown";if("system"===this._date.zone.type)return"system";const e=this.zone;return"fixed"===e.type?0===e.fixed?"UTC":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new l(this._date.plus(e))}diff(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"milliseconds";return this._date.diff(e._date,t)[t]}toISODate(){return this._date.toISODate()}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toISOTime(e,t){return this._date.toISOTime({suppressMilliseconds:e,includeOffset:t&&!this.isUnknownTimeZone})}toFormat(e,t){return this.isUnknownTimeZone&&(e=e.replaceAll("Z","")),this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLValue(){return this._date.toFormat("yyyy-LL-dd HH:mm:ss")}toSQLWithKeyword(){return`timestamp '${this.toSQLValue()}'`}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new l(this._date.toUTC())}toLocal(){return new l(this._date.toLocal())}toString(){return this.toISOString(!0)}static fromReaderAsTimeStampOffset(e){if(!e)return null;const t=i.c9.fromISO(e,{setZone:!0});return new l(t)}}function h(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e instanceof i.bo)return e;if("system"===e.toLowerCase())return"system";if("utc"===e.toLowerCase())return"UTC";if("unknown"===e.toLowerCase())return a.GB.instance;if(/^[+-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const t=i.mQ.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e);if(t)return t}const s=i.oh.create(e);if(!s.isValid){if(t)throw new c(r.TimeZoneNotRecognized);return null}return s}},80324:(e,t,s)=>{s.d(t,{Fq:()=>c,SQ:()=>i,Yc:()=>a,Yq:()=>o,uf:()=>n});var r=s(76797);function n(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":return 109439;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 109405;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 109409}return null}function a(e){if(null==e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new r.A({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function i(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":return 9093;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 9002;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 9030}return null}function o(e){if(null==e)return null;const t=e.clone();return void 0!==e.cache._geVersion&&(t.cache._geVersion=e.cache._geVersion),t}function c(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},16503:(e,t,s)=>{s.d(t,{n:()=>o});var r=s(46405),n=s(38042),a=s(24241);function i(e){e=e.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g,"[$&]");let t="";const s=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const r of e.match(s)||[])switch(r){case"D":t+="d";break;case"DD":t+="dd";break;case"DDD":t+="o";break;case"d":t+="c";break;case"ddd":t+="ccc";break;case"dddd":t+="cccc";break;case"M":t+="L";break;case"MM":t+="LL";break;case"MMM":t+="LLL";break;case"MMMM":t+="LLLL";break;case"YY":t+="yy";break;case"Y":case"YYYY":t+="yyyy";break;case"Q":t+="q";break;case"X":case"x":t+=r;break;default:r.length>=2&&"["===r.slice(0,1)&&"]"===r.slice(-1)?t+=`'${r.slice(1,-1)}'`:t+=`'${r}'`}return t}class o{constructor(e,t,s){this._year=e,this._month=t,this._day=s,this.declaredRootClass="esri.core.sql.dateonly"}get month(){return this._month}get monthJS(){return this._month-1}get year(){return this._year}get day(){return this._day}get isValid(){return this.toDateTime("unknown").isValid}equals(e){return e instanceof o&&e.day===this.day&&e.month===this.month&&e.year===this.year}clone(){return new o(this._year,this._month,this._day)}toDateTime(e){return a.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,r.mT)(e)})}toDateTimeLuxon(e){return a.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,r.mT)(e)})}toString(){return`${this.year.toString().padStart(4,"0")}-${this.month.toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`}toFormat(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(null===e||""===e)return this.toString();if(t&&(e=i(e)),!e)return"";const s=this.toDateTime("unknown");return r.lY.dateTimeToArcadeDate(s).toFormat(e,{locale:(0,n.JK)(),numberingSystem:"latn"})}toArcadeDate(){const e=this.toDateTime("unknown");return r.lY.dateTimeToArcadeDate(e)}toNumber(){return this.toDateTime("unknown").toMillis()}toJSDate(){return this.toDateTime("unknown").toJSDate()}toStorageFormat(){return this.toFormat("yyyy-LL-dd",!1)}toSQLValue(){return this.toFormat("yyyy-LL-dd",!1)}toSQLWithKeyword(){return"date '"+this.toFormat("yyyy-LL-dd",!1)+"'"}plus(e,t){return o.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}toUTCDateTime(){return a.c9.utc(this.year,this.month,this.day,0,0,0,0)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}static fromMilliseconds(e){const t=a.c9.fromMillis(e,{zone:a.mQ.utcInstance});return t.isValid?o.fromParts(t.year,t.month,t.day):null}static fromSeconds(e){const t=a.c9.fromSeconds(e,{zone:a.mQ.utcInstance});return t.isValid?o.fromParts(t.year,t.month,t.day):null}static fromReader(e){if(!e)return null;const t=e.split("-");return 3!==t.length?null:new o(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10))}static fromParts(e,t,s){const r=new o(e,t,s);return!1===r.isValid?null:r}static fromDateJS(e){return o.fromParts(e.getFullYear(),e.getMonth()+1,e.getDay())}static fromDateTime(e){return o.fromParts(e.year,e.month,e.day)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(""===e)return null;if(null===e)return null;const s=[];if(t)(t=i(t))&&s.push(t);else if(null===t||""===t){const t=a.c9.fromISO(e,{setZone:!0});return t.isValid?o.fromParts(t.year,t.month,t.day):null}for(const r of s){const s=a.c9.fromFormat(e,t??r);if(s.isValid)return new o(s.year,s.month,s.day)}return null}static fromNow(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"system";const t=a.c9.fromJSDate(new Date).setZone((0,r.mT)(e));return new o(t.year,t.month,t.day)}}},14902:(e,t,s)=>{s.d(t,{k:()=>o});var r=s(80324),n=s(38042),a=s(24241);function i(e){if(!e)return"";const t=/(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;let s="";for(const r of e.match(t)||[])switch(r){case"SSS":case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":s+=r;break;case"A":case"a":s+="a";break;default:s+=`'${r}'`}return s}class o{constructor(e,t,s,r){this._hour=e,this._minute=t,this._second=s,this._millisecond=r,this.declaredRootClass="esri.core.sql.timeonly"}get hour(){return this._hour}get minute(){return this._minute}get second(){return this._second}get millisecond(){return this._millisecond}equals(e){return e instanceof o&&e.hour===this.hour&&e.minute===this.minute&&e.second===this.second&&e.millisecond===this.millisecond}clone(){return new o(this.hour,this.minute,this.second,this.millisecond)}isValid(){return(0,r.Fq)(this.hour)&&(0,r.Fq)(this.minute)&&(0,r.Fq)(this.second)&&(0,r.Fq)(this.millisecond)&&this.hour>=0&&this.hour<24&&this.minute>=0&&this.minute<60&&this.second>=0&&this.second<60&&this.millisecond>=0&&this.millisecond<1e3}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`+(this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):"")}toSQLValue(){return this.toString()}toSQLWithKeyword(){return`time '${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}${this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):""}'`}toStorageString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`}toFormat(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null===e||""===e?this.toString():(e=i(e))?a.c9.local(1970,1,1,this._hour,this._minute,this._second,this._millisecond).toFormat(e,{locale:(0,n.JK)(),numberingSystem:"latn"}):""}toNumber(){return this.millisecond+1e3*this.second+1e3*this.minute*60+60*this.hour*60*1e3}static fromParts(e,t,s,r){const n=new o(e,t,s,r);return n.isValid()?n:null}static fromReader(e){if(!e)return null;const t=e.split(":");return 3!==t.length?null:new o(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10),0)}static fromMilliseconds(e){if(e>864e5||e<0)return null;const t=Math.floor(e/1e3%60),s=Math.floor(e/6e4%60),r=Math.floor(e/36e5%24),n=Math.floor(e%1e3);return new o(r,s,t,n)}static fromDateJS(e){return new o(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}static fromDateTime(e){return new o(e.hour,e.minute,e.second,e.millisecond)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(""===e)return null;if(null===e)return null;const s=[];t?(t=i(t))&&s.push(t):null!==t&&""!==t||(s.push("HH:mm:ss"),s.push("HH:mm:ss.SSS"),s.push("hh:mm:ss a"),s.push("hh:mm:ss.SSS a"),s.push("HH:mm"),s.push("hh:mm a"),s.push("H:mm"),s.push("h:mm a"),s.push("H:mm:ss"),s.push("h:mm:ss a"),s.push("H:mm:ss.SSS"),s.push("h:mm:ss.SSS a"));for(const r of s){const t=a.c9.fromFormat(e,r);if(t.isValid)return new o(t.hour,t.minute,t.second,t.millisecond)}return null}plus(e,t){switch(e){case"days":case"years":case"months":return this.clone();case"hours":case"minutes":case"seconds":case"milliseconds":return o.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}return null}toUTCDateTime(){return a.c9.utc(1970,1,1,this.hour,this.minute,this.second,this.millisecond)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}}}}]);
//# sourceMappingURL=3620.65a9ec4d.chunk.js.map