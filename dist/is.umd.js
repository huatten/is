!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("core-js/modules/esnext.async-iterator.every.js"),require("core-js/modules/esnext.iterator.constructor.js"),require("core-js/modules/esnext.iterator.every.js")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/esnext.async-iterator.every.js","core-js/modules/esnext.iterator.constructor.js","core-js/modules/esnext.iterator.every.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).is={})}(this,(function(e){"use strict";function t(e){const t=Object.prototype.toString.call(e).toLowerCase();return/\[object (.*)]/g.exec(t)[1]}const n=function(e){return"arguments"===t(e)||null!==e&&"object"==typeof e&&"callee"in e},r=function(e){return e&&Array.isArray(e)||"array"===t(e)},i=function(e){return"null"!==t(e)&&"function"!==t(e)&&"number"===t(e.length)&&e.length>=0&&Number.isInteger(e.length)},s=function(e){return"arraybuffer"===t(e)},o=function(e){return!0===e||!1===e||"boolean"===t(e)},a=function(e){return"bigint"===t(e)},u=function(e){return"date"===t(e)},c=function(e){return e instanceof Element||null!==e&&"object"===t(e)&&1===e.nodeType&&"string"===t(e.nodeName)},f=function(e){return null==e||("string"===t(e)&&""===e.trim()||("array"===t(e)&&0===e.length||"object"===t(e)&&0===Object.keys(e).length))},m=function(e){return"function"==typeof e},l=function(e){return"object"===t(e)},g=function(e){return"number"==typeof e&&Number.isNaN(e)},b=function(e){return null===e},d=function(e){return"number"==typeof e&&!Number.isNaN(e)&&Number(e)===e},w=function(e){return Object(e)===e},D=function(e){return"object"==typeof e&&"regexp"===t(e)},p=function(e){return"string"===t(e)},h=function(e){return"symbol"===t(e)},y=function(e){return void 0===e};function N(e,n){if(!("number"===t(e))){const r=t(e);throw new TypeError(`${n}: Expected a number but received a ${r}`)}}const j=function(e){return N(e,"isInteger"),Number.isInteger(e)},v=function(e){return N(e,"isDecimal"),!Number.isInteger(e)},x=function(e){return N(e,"isPositiveInteger"),Number.isInteger(e)&&e>0},T=function(e){return N(e,"isNegativeInteger"),Number.isInteger(e)&&e<0},F=function(e){return N(e,"isPositiveInteger"),!Number.isInteger(e)&&e>0},k=function(e){return N(e,"isNegativeDecimal"),!Number.isInteger(e)&&e<0},A=function(e){return N(e,"isPositive"),"number"===t(e)&&e>0},E=function(e){return N(e,"isNegative"),"number"===t(e)&&e<0},I=function(e){return N(e,"isOdd"),"number "===t(e)&&(e%2==1||e%2==-1)},O=function(e){return N(e,"isEven"),"number "===t(e)&&e%2==0},Y=function(e){if(N(e,"isPrime"),e<=1)return!1;for(let t=2;t<e;t++)if(e%t==0)return!1;return!0},P=function(e){return N(e,"isNatural"),Number.isInteger(e)&&e>=0},$=function(e){return N(e,"isFinite"),"number "===t(e)&&Number.isFinite(e)},M=function(e){return N(e,"isInfinite"),"number "===t(e)&&!Number.isFinite(e)};function C(e,n){if(!("string"===t(e))){const r=t(e);throw new TypeError(`${n}: Expected a string but received a ${r}`)}}const L=function(e){C(e,"isHexColor");return e&&/^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e)},W=function(e){C(e,"isMD5");return e&&/^[a-fA-F0-9]{32}$/.test(e)},S=function(e){C(e,"isSHA256");return e&&/^[a-fA-F0-9]{64}$/.test(e)},z=function(e){C(e,"isURL");return e&&/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(e)},U=function(e){C(e,"isUUID");return e&&/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(e)},B=function(e){return e&&/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e)},H=function(e){C(e,"isEnglish");return e&&/^[A-Za-z]+$/.test(e)},Z=function(e){C(e,"isChinese");return e&&/^[\u4e00-\u9fa5]+$/.test(e)},_=function(e){C(e,"isHtml");return e&&/<([a-z]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)/i.test(e)},q=function(e){C(e,"isCamelCase");return e&&/^[a-z]+([A-Z][a-z]*)*$/.test(e)},J=function(e){C(e,"isPascalCase");return e&&/^[A-Z][a-z]*([A-Z][a-z]*)*$/.test(e)},R=function(e){C(e,"isSnakeCase");return e&&/^[a-z0-9]+(_[a-z0-9]+)*$/.test(e)},G=function(e){C(e,"isUppercase");return/^[A-Z]+$/.test(e)},K=function(e){C(e,"isLowercase");return/^[a-z]+$/.test(e)},Q=function(e){C(e,"isProvince");return e&&/^(北京|天津|上海|重庆|河北|山西|辽宁|吉林|黑龙江|江苏|浙江|安徽|福建|江西|山东|河南|湖北|湖南|广东|海南|四川|贵州|云南|陕西|甘肃|青海|台湾|内蒙古|广西|西藏|宁夏|新疆|香港|澳门)$/.test(e)},V=function(e){C(e,"isJWT");const t=e.split(".");if(3!==t.length)return!1;const n=/^[A-Za-z0-9-_]+$/;return t.every((e=>n.test(e)))},X=window&&window.navigator,ee=(X&&X.platform||"").toLowerCase(),te=(X&&X.userAgent||"").toLowerCase(),ne=(X&&X.vendor||"").toLowerCase(),re=function(){return/android/.test(te)},ie=function(){return re()&&/mobile/.test(te)},se=function(){return re()&&!/mobile/.test(te)},oe=function(){return/blackberry/.test(te)||/bb10/.test(te)},ae=function(){return oe()&&/mobile/.test(te)},ue=function(){return oe()&&!/mobile/.test(te)},ce=function(){return"undefined"!=typeof window&&"undefined"!=typeof navigator},fe=function(){return/google inc/.test(ne)&&/chrome/.test(te)&&!/edge|edg/.test(te)},me=function(){return/iphone/.test(te)},le=function(){return/ipod/.test(te)},ge=function(){return/meego/.test(te)},be=function(){return/win/.test(ee)},de=function(){return be()&&/phone/.test(te)},we=function(){return ie()||ae()||me()||le()||ge()||de()},De=function(){return be()&&/touch/.test(te)&&!de()},pe=function(){const e=/mac/.test(ee)&&X.maxTouchPoints>1;return/ipad/.test(te)||e},he=function(){return se()||ue()||De()||pe()},ye=function(){return!we()&&!he()},Ne=function(){return/google inc/.test(ne)&&/edge|edg/.test(te)},je=function(){return/firefox/.test(te)},ve=function(){return/trident/.test(te)||/msie/.test(te)},xe=function(){return me()||le()||pe()},Te=function(){return/linux/.test(ee)},Fe=function(){return/mac/.test(ee)},ke=function(){return"undefined"!=typeof global&&globalThis===global},Ae=function(){return!X||!0===X.onLine},Ee=function(){return!Ae()},Ie=function(){return/opera/i.test(te)},Oe=function(){return/safari/i.test(te)&&!/chrome|edg|edge/.test(te)},Ye=function(){return/micromessenger/.test(te)},Pe=function(e){C(e,"isTime12");return"string"==typeof e&&/^(?:0?[1-9]|1[0-2]):[0-5]\d:[0-5]\d(?:\.\d{3})?(?: (AM|am|PM|pm))?$/.test(e)},$e=function(e){C(e,"isTime24");return e&&/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d{3})?$/.test(e)},Me=function(e){return C(e,"isTime"),Pe(e)||$e(e)},Ce=function(e){const t=/^[1-9]\d{3}$/.test(e),n=parseInt(e,10);return!(!t||Number.isNaN(n))&&(n%4==0&&n%100!=0||n%400==0)},Le=function(e){return"number"==typeof e&&e>0&&new Date(e).getTime()===e},We=function(e){const t=u(e)?e:Le(e)?new Date(e):"";let n=(new Date).toDateString();return u(t)&&t.toDateString()===n},Se=function(e){if(!u(e)||!Le(e))throw new Error("isYesterday: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=new Date,r=new Date(n.setDate(n.getDate()-1)).toDateString();return u(t)&&t.toDateString()===r},ze=function(e){if(!u(e)||!Le(e))throw new Error("isTomorrow: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=new Date,r=new Date(n.setDate(n.getDate()+1)).toDateString();return u(t)&&t.toDateString()===r},Ue=function(e){if(!u(e)||!Le(e))throw new Error("isWeekend: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=t?.getDay();return u(t)&&(0===n||6===n)},Be=function(e){if(!u(e)||!Le(e))throw new Error("isWeekday: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=t?.getDay();return u(t)&&n>=1&&n<=5},He=function(e){if(!u(e)||!Le(e))throw new Error("isFeature: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"";return new Date>t},Ze=function(e){if(!u(e)||!Le(e))throw new Error("isPast: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"";return new Date<t},_e=function(e){if(!u(e)||!Le(e))throw new Error("isThisWeek: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=new Date,r=new Date(n.setDate(n.getDate()-n.getDay())),i=new Date(n.setDate(n.getDate()-n.getDay()+6));return t>=r&&t<=i},qe=function(e){if(!u(e)||!Le(e))throw new Error("isThisMonth: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()},Je=function(e){if(!u(e)||!Le(e))throw new Error("isThisYear: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=new Date;return t.getFullYear()===n.getFullYear()},Re=function(e){if(!u(e)||!Le(e))throw new Error("isNextMonth: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=new Date,r=n.getFullYear();let i=n.getMonth()+1,s=r;return i>11&&(i=0,s++),t.getFullYear()===s&&t.getMonth()===i},Ge=function(e){if(!u(e)||!Le(e))throw new Error("isNextWeek: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=new Date,r=new Date(n),i=n.getDay(),s=i>=1?i-1:6;r.setDate(n.getDate()-s);const o=new Date(r);o.setDate(r.getDate()+7);const a=new Date(o);return a.setDate(o.getDate()+6),t>=o&&t<=a},Ke=function(e){if(!u(e)||!Le(e))throw new Error("isNextYear: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=(new Date).getFullYear()+1;return t.getFullYear()===n},Qe=function(e){if(!u(e)||!Le(e))throw new Error("isLastWeek: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=new Date,r=new Date(n),i=n.getDay(),s=i>=1?i-1:6;r.setDate(n.getDate()-s);const o=new Date(r);o.setDate(r.getDate()-7);const a=new Date(r);return a.setDate(r.getDate()-1),t>=o&&t<=a},Ve=function(e){if(!u(e)||!Le(e))throw new Error("isLastMonth: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=new Date,r=n.getMonth()-1,i=r<0?n.getFullYear()-1:n.getFullYear();return t.getMonth()===(r+12)%12&&t.getFullYear()===i},Xe=function(e){if(!u(e)||!Le(e))throw new Error("isLastYear: params must be a Date Object or timestamp");const t=u(e)?e:Le(e)?new Date(e):"",n=(new Date).getFullYear()-1;return t.getFullYear()===n};var et={arguments:e=>n(e),array:e=>r(e),arrayLike:e=>i(e),arraybuffer:e=>s(e),boolean:e=>o(e),bigint:e=>a(e),date:e=>u(e),element:e=>c(e),empty:e=>f(e),function:e=>m(e),json:e=>l(e),NaN:e=>g(e),null:e=>b(e),number:e=>d(e),object:e=>w(e),regexp:e=>D(e),string:e=>p(e),symbol:e=>h(e),undefined:e=>y(e),android:()=>re(),androidPhone:()=>ie(),androidTablet:()=>se(),blackberry:()=>oe(),blackberryPhone:()=>ae(),blackberryTablet:()=>ue(),browser:()=>ce(),chrome:()=>fe(),desktop:()=>ye,edge:()=>Ne(),firefox:()=>je(),ie:()=>ve(),ios:()=>xe(),ipad:()=>pe(),iphone:()=>me(),ipod:()=>le(),linux:()=>Te(),mac:()=>Fe(),meego:()=>ge(),mobile:()=>we(),node:()=>ke(),offline:()=>Ee(),online:()=>Ae(),opera:()=>Ie(),safari:()=>Oe(),tablet:()=>he(),wechat:()=>Ye(),windows:()=>be(),windowsPhone:()=>de(),windowsTablet:()=>De(),decimal:e=>v(e),even:e=>O(e),finite:e=>$(e),infinite:e=>M(e),integer:e=>j(e),natural:e=>P(e),negativeDecimal:e=>k(e),negativeInteger:e=>T(e),negative:e=>E(e),odd:e=>I(e),positiveDecimal:e=>F(e),positiveInteger:e=>x(e),positive:e=>A(e),prime:e=>Y(e),camelCase:e=>q(e),chinese:e=>Z(e),english:e=>H(e),hexColor:e=>L(e),html:e=>_(e),jwt:e=>V(e),lowercase:e=>K(e),md5:e=>W(e),pascalCase:e=>J(e),phoneNumber:e=>B(e),province:e=>Q(e),sha256:e=>S(e),snakeCase:e=>R(e),uppercase:e=>G(e),url:e=>z(e),uuid:e=>U(e),feature:e=>He(e),lastMonth:e=>Ve(e),lastWeek:e=>Qe(e),lastYear:e=>Xe(e),leapYear:e=>Ce(e),nextMonth:e=>Re(e),nextWeek:e=>Ge(e),nextYear:e=>Ke(e),past:e=>Ze(e),thisMonth:e=>qe(e),thisWeek:e=>_e(e),thisYear:e=>Je(e),time:e=>Me(e),time12:e=>Pe(e),time24:e=>$e(e),timestamp:e=>Le(e),today:e=>We(e),tomorrow:e=>ze(e),weekend:e=>Ue(e),weekday:e=>Be(e),yesterday:e=>Se(e)};e.default=et,e.isAndroid=re,e.isAndroidPhone=ie,e.isAndroidTablet=se,e.isArguments=n,e.isArray=r,e.isArrayLike=i,e.isArraybuffer=s,e.isBigint=a,e.isBlackberry=oe,e.isBlackberryPhone=ae,e.isBlackberryTablet=ue,e.isBoolean=o,e.isBrowser=ce,e.isCamelCase=q,e.isChinese=Z,e.isChrome=fe,e.isDate=u,e.isDecimal=v,e.isDesktop=ye,e.isEdge=Ne,e.isElement=c,e.isEmpty=f,e.isEnglish=H,e.isEven=O,e.isFeature=He,e.isFinite=$,e.isFirefox=je,e.isFunction=m,e.isHexColor=L,e.isHtml=_,e.isIE=ve,e.isInfinite=M,e.isInteger=j,e.isIos=xe,e.isIpad=pe,e.isIphone=me,e.isIpod=le,e.isJSON=l,e.isJWT=V,e.isLastMonth=Ve,e.isLastWeek=Qe,e.isLastYear=Xe,e.isLeapYear=Ce,e.isLinux=Te,e.isLowercase=K,e.isMD5=W,e.isMac=Fe,e.isMeego=ge,e.isMobile=we,e.isNaN=g,e.isNatural=P,e.isNegative=E,e.isNegativeDecimal=k,e.isNegativeInteger=T,e.isNextMonth=Re,e.isNextWeek=Ge,e.isNextYear=Ke,e.isNode=ke,e.isNull=b,e.isNumber=d,e.isObject=w,e.isOdd=I,e.isOffline=Ee,e.isOnline=Ae,e.isOpera=Ie,e.isPascalCase=J,e.isPast=Ze,e.isPhoneNumber=B,e.isPositive=A,e.isPositiveDecimal=F,e.isPositiveInteger=x,e.isPrime=Y,e.isProvince=Q,e.isRegexp=D,e.isSHA256=S,e.isSafari=Oe,e.isSnakeCase=R,e.isString=p,e.isSymbol=h,e.isTablet=he,e.isThisMonth=qe,e.isThisWeek=_e,e.isThisYear=Je,e.isTime=Me,e.isTime12=Pe,e.isTime24=$e,e.isTimestamp=Le,e.isToday=We,e.isTomorrow=ze,e.isURL=z,e.isUUID=U,e.isUndefined=y,e.isUppercase=G,e.isWechat=Ye,e.isWeekday=Be,e.isWeekend=Ue,e.isWindows=be,e.isWindowsPhone=de,e.isWindowsTablet=De,e.isYesterday=Se,Object.defineProperty(e,"__esModule",{value:!0})}));
