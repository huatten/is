function e(e){const t=Object.prototype.toString.call(e).toLowerCase();return/\[object (.*)]/g.exec(t)[1]}const t=function(t){return"arguments"===e(t)||null!==t&&"object"==typeof t&&"callee"in t},n=function(t){return t&&Array.isArray(t)||"array"===e(t)},r=function(t){return"null"!==e(t)&&"function"!==e(t)&&"number"===e(t.length)&&t.length>=0&&Number.isInteger(t.length)},i=function(t){return"arraybuffer"===e(t)},o=function(t){return!0===t||!1===t||"boolean"===e(t)},a=function(t){return"bigint"===e(t)},u=function(t){return"date"===e(t)},s=function(t){return t instanceof Element||null!==t&&"object"===e(t)&&1===t.nodeType&&"string"===e(t.nodeName)},c=function(t){return null==t||("string"===e(t)&&""===t.trim()||("array"===e(t)&&0===t.length||"object"===e(t)&&0===Object.keys(t).length))},f=function(e){return"function"==typeof e},m=function(t){return"object"===e(t)},g=function(e){return"number"==typeof e&&Number.isNaN(e)},l=function(e){return null===e},b=function(e){return"number"==typeof e&&!Number.isNaN(e)&&Number(e)===e},w=function(e){return Object(e)===e},D=function(t){return"object"==typeof t&&"regexp"===e(t)},p=function(t){return"string"===e(t)},d=function(t){return"symbol"===e(t)},h=function(e){return void 0===e};function y(t,n){if(!("number"===e(t))){const r=e(t);throw new TypeError(`${n}: Expected a number but received a ${r}`)}}const N=function(e){return y(e,"isInteger"),Number.isInteger(e)},F=function(e){return y(e,"isDecimal"),!Number.isInteger(e)},j=function(e){return y(e,"isPositiveInteger"),Number.isInteger(e)&&e>0},v=function(e){return y(e,"isNegativeInteger"),Number.isInteger(e)&&e<0},$=function(e){return y(e,"isPositiveInteger"),!Number.isInteger(e)&&e>0},A=function(e){return y(e,"isNegativeDecimal"),!Number.isInteger(e)&&e<0},E=function(t){return y(t,"isPositive"),"number"===e(t)&&t>0},Y=function(t){return y(t,"isNegative"),"number"===e(t)&&t<0},k=function(t){return y(t,"isOdd"),"number "===e(t)&&(t%2==1||t%2==-1)},x=function(t){return y(t,"isEven"),"number "===e(t)&&t%2==0},O=function(e){if(y(e,"isPrime"),e<=1)return!1;for(let t=2;t<e;t++)if(e%t==0)return!1;return!0},I=function(e){return y(e,"isNatural"),Number.isInteger(e)&&e>=0},T=function(t){return y(t,"isFinite"),"number "===e(t)&&Number.isFinite(t)},M=function(t){return y(t,"isInfinite"),"number "===e(t)&&!Number.isFinite(t)};function C(t,n){if(!("string"===e(t))){const r=e(t);throw new TypeError(`${n}: Expected a string but received a ${r}`)}}const P=function(e){C(e,"isHexColor");return e&&/^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e)},L=function(e){C(e,"isMD5");return e&&/^[a-fA-F0-9]{32}$/.test(e)},z=function(e){C(e,"isSHA256");return e&&/^[a-fA-F0-9]{64}$/.test(e)},S=function(e){C(e,"isURL");return e&&/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(e)},W=function(e){C(e,"isUUID");return e&&/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(e)},Z=function(e){return e&&/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e)},U=function(e){C(e,"isEnglish");return e&&/^[A-Za-z]+$/.test(e)},H=function(e){C(e,"isChinese");return e&&/^[\u4e00-\u9fa5]+$/.test(e)},B=function(e){C(e,"isHtml");return e&&/<([a-z]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)/i.test(e)},R=function(e){C(e,"isCamelCase");return e&&/^[a-z]+([A-Z][a-z]*)*$/.test(e)},_=function(e){C(e,"isPascalCase");return e&&/^[A-Z][a-z]*([A-Z][a-z]*)*$/.test(e)},q=function(e){C(e,"isSnakeCase");return e&&/^[a-z0-9]+(_[a-z0-9]+)*$/.test(e)},G=function(e){C(e,"isUppercase");return/^[A-Z]+$/.test(e)},J=function(e){C(e,"isLowercase");return/^[a-z]+$/.test(e)},K=function(e){C(e,"isProvince");return e&&/^(北京|天津|上海|重庆|河北|山西|辽宁|吉林|黑龙江|江苏|浙江|安徽|福建|江西|山东|河南|湖北|湖南|广东|海南|四川|贵州|云南|陕西|甘肃|青海|台湾|内蒙古|广西|西藏|宁夏|新疆|香港|澳门)$/.test(e)},Q=window&&window.navigator,V=(Q&&Q.platform||"").toLowerCase(),X=(Q&&Q.userAgent||"").toLowerCase(),ee=(Q&&Q.vendor||"").toLowerCase(),te=function(){return/android/.test(X)},ne=function(){return te()&&/mobile/.test(X)},re=function(){return te()&&!/mobile/.test(X)},ie=function(){return/blackberry/.test(X)||/bb10/.test(X)},oe=function(){return ie()&&/mobile/.test(X)},ae=function(){return ie()&&!/mobile/.test(X)},ue=function(){return"undefined"!=typeof window&&"undefined"!=typeof navigator},se=function(){return/google inc/.test(ee)&&/chrome/.test(X)&&!/edge|edg/.test(X)},ce=function(){return/iphone/.test(X)},fe=function(){return/ipod/.test(X)},me=function(){return/meego/.test(X)},ge=function(){return/win/.test(V)},le=function(){return ge()&&/phone/.test(X)},be=function(){return ne()||oe()||ce()||fe()||me()||le()},we=function(){return ge()&&/touch/.test(X)&&!le()},De=function(){const e=/mac/.test(V)&&Q.maxTouchPoints>1;return/ipad/.test(X)||e},pe=function(){return re()||ae()||we()||De()},de=function(){return!be()&&!pe()},he=function(){return/google inc/.test(ee)&&/edge|edg/.test(X)},ye=function(){return/firefox/.test(X)},Ne=function(){return/trident/.test(X)||/msie/.test(X)},Fe=function(){return ce()||fe()||De()},je=function(){return/linux/.test(V)},ve=function(){return/mac/.test(V)},$e=function(){return"undefined"!=typeof global&&globalThis===global},Ae=function(){return!Q||!0===Q.onLine},Ee=function(){return!Ae()},Ye=function(){return/opera/i.test(X)},ke=function(){return/safari/i.test(X)&&!/chrome|edg|edge/.test(X)},xe=function(){return/micromessenger/.test(X)},Oe=function(e){C(e,"isTime12");return"string"==typeof e&&/^(?:0?[1-9]|1[0-2]):[0-5]\d:[0-5]\d(?:\.\d{3})?(?: (AM|am|PM|pm))?$/.test(e)},Ie=function(e){C(e,"isTime24");return e&&/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d{3})?$/.test(e)},Te=function(e){return C(e,"isTime"),Oe(e)||Ie(e)},Me=function(e){const t=/^[1-9]\d{3}$/.test(e),n=parseInt(e,10);return!(!t||Number.isNaN(n))&&(n%4==0&&n%100!=0||n%400==0)},Ce=function(e){return"number"==typeof e&&e>0&&new Date(e).getTime()===e},Pe=function(e){const t=u(e)?e:Ce(e)?new Date(e):"";let n=(new Date).toDateString();return u(t)&&t.toDateString()===n},Le=function(e){if(!u(e)||!Ce(e))throw new Error("isYesterday: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=new Date,r=new Date(n.setDate(n.getDate()-1)).toDateString();return u(t)&&t.toDateString()===r},ze=function(e){if(!u(e)||!Ce(e))throw new Error("isTomorrow: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=new Date,r=new Date(n.setDate(n.getDate()+1)).toDateString();return u(t)&&t.toDateString()===r},Se=function(e){if(!u(e)||!Ce(e))throw new Error("isWeekend: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=t?.getDay();return u(t)&&(0===n||6===n)},We=function(e){if(!u(e)||!Ce(e))throw new Error("isWeekday: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=t?.getDay();return u(t)&&n>=1&&n<=5},Ze=function(e){if(!u(e)||!Ce(e))throw new Error("isFeature: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"";return new Date>t},Ue=function(e){if(!u(e)||!Ce(e))throw new Error("isPast: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"";return new Date<t},He=function(e){if(!u(e)||!Ce(e))throw new Error("isThisWeek: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=new Date,r=new Date(n.setDate(n.getDate()-n.getDay())),i=new Date(n.setDate(n.getDate()-n.getDay()+6));return t>=r&&t<=i},Be=function(e){if(!u(e)||!Ce(e))throw new Error("isThisMonth: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()},Re=function(e){if(!u(e)||!Ce(e))throw new Error("isThisYear: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=new Date;return t.getFullYear()===n.getFullYear()},_e=function(e){if(!u(e)||!Ce(e))throw new Error("isNextMonth: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=new Date,r=n.getFullYear();let i=n.getMonth()+1,o=r;return i>11&&(i=0,o++),t.getFullYear()===o&&t.getMonth()===i},qe=function(e){if(!u(e)||!Ce(e))throw new Error("isNextWeek: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=new Date,r=new Date(n),i=n.getDay(),o=i>=1?i-1:6;r.setDate(n.getDate()-o);const a=new Date(r);a.setDate(r.getDate()+7);const s=new Date(a);return s.setDate(a.getDate()+6),t>=a&&t<=s},Ge=function(e){if(!u(e)||!Ce(e))throw new Error("isNextYear: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=(new Date).getFullYear()+1;return t.getFullYear()===n},Je=function(e){if(!u(e)||!Ce(e))throw new Error("isLastWeek: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=new Date,r=new Date(n),i=n.getDay(),o=i>=1?i-1:6;r.setDate(n.getDate()-o);const a=new Date(r);a.setDate(r.getDate()-7);const s=new Date(r);return s.setDate(r.getDate()-1),t>=a&&t<=s},Ke=function(e){if(!u(e)||!Ce(e))throw new Error("isLastMonth: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=new Date,r=n.getMonth()-1,i=r<0?n.getFullYear()-1:n.getFullYear();return t.getMonth()===(r+12)%12&&t.getFullYear()===i},Qe=function(e){if(!u(e)||!Ce(e))throw new Error("isLastYear: params must be a Date Object or timestamp");const t=u(e)?e:Ce(e)?new Date(e):"",n=(new Date).getFullYear()-1;return t.getFullYear()===n};var Ve={arguments:e=>t(e),array:e=>n(e),arrayLike:e=>r(e),arraybuffer:e=>i(e),boolean:e=>o(e),bigint:e=>a(e),date:e=>u(e),element:e=>s(e),empty:e=>c(e),function:e=>f(e),json:e=>m(e),NaN:e=>g(e),null:e=>l(e),number:e=>b(e),object:e=>w(e),regexp:e=>D(e),string:e=>p(e),symbol:e=>d(e),undefined:e=>h(e),android:()=>te(),androidPhone:()=>ne(),androidTablet:()=>re(),blackberry:()=>ie(),blackberryPhone:()=>oe(),blackberryTablet:()=>ae(),browser:()=>ue(),chrome:()=>se(),desktop:()=>de,edge:()=>he(),firefox:()=>ye(),ie:()=>Ne(),ios:()=>Fe(),ipad:()=>De(),iphone:()=>ce(),ipod:()=>fe(),linux:()=>je(),mac:()=>ve(),meego:()=>me(),mobile:()=>be(),node:()=>$e(),offline:()=>Ee(),online:()=>Ae(),opera:()=>Ye(),safari:()=>ke(),tablet:()=>pe(),wechat:()=>xe(),windows:()=>ge(),windowsPhone:()=>le(),windowsTablet:()=>we(),decimal:e=>F(e),even:e=>x(e),finite:e=>T(e),infinite:e=>M(e),integer:e=>N(e),natural:e=>I(e),negativeDecimal:e=>A(e),negativeInteger:e=>v(e),negative:e=>Y(e),odd:e=>k(e),positiveDecimal:e=>$(e),positiveInteger:e=>j(e),positive:e=>E(e),prime:e=>O(e),camelCase:e=>R(e),chinese:e=>H(e),english:e=>U(e),hexColor:e=>P(e),html:e=>B(e),lowercase:e=>J(e),md5:e=>L(e),pascalCase:e=>_(e),phoneNumber:e=>Z(e),province:e=>K(e),sha256:e=>z(e),snakeCase:e=>q(e),uppercase:e=>G(e),url:e=>S(e),uuid:e=>W(e),feature:e=>Ze(e),lastMonth:e=>Ke(e),lastWeek:e=>Je(e),lastYear:e=>Qe(e),leapYear:e=>Me(e),nextMonth:e=>_e(e),nextWeek:e=>qe(e),nextYear:e=>Ge(e),past:e=>Ue(e),thisMonth:e=>Be(e),thisWeek:e=>He(e),thisYear:e=>Re(e),time:e=>Te(e),time12:e=>Oe(e),time24:e=>Ie(e),timestamp:e=>Ce(e),today:e=>Pe(e),tomorrow:e=>ze(e),weekend:e=>Se(e),weekday:e=>We(e),yesterday:e=>Le(e)};export{Ve as default,te as isAndroid,ne as isAndroidPhone,re as isAndroidTablet,t as isArguments,n as isArray,r as isArrayLike,i as isArraybuffer,a as isBigint,ie as isBlackberry,oe as isBlackberryPhone,ae as isBlackberryTablet,o as isBoolean,ue as isBrowser,R as isCamelCase,H as isChinese,se as isChrome,u as isDate,F as isDecimal,de as isDesktop,he as isEdge,s as isElement,c as isEmpty,U as isEnglish,x as isEven,Ze as isFeature,T as isFinite,ye as isFirefox,f as isFunction,P as isHexColor,B as isHtml,Ne as isIE,M as isInfinite,N as isInteger,Fe as isIos,De as isIpad,ce as isIphone,fe as isIpod,m as isJSON,Ke as isLastMonth,Je as isLastWeek,Qe as isLastYear,Me as isLeapYear,je as isLinux,J as isLowercase,L as isMD5,ve as isMac,me as isMeego,be as isMobile,g as isNaN,I as isNatural,Y as isNegative,A as isNegativeDecimal,v as isNegativeInteger,_e as isNextMonth,qe as isNextWeek,Ge as isNextYear,$e as isNode,l as isNull,b as isNumber,w as isObject,k as isOdd,Ee as isOffline,Ae as isOnline,Ye as isOpera,_ as isPascalCase,Ue as isPast,Z as isPhoneNumber,E as isPositive,$ as isPositiveDecimal,j as isPositiveInteger,O as isPrime,K as isProvince,D as isRegexp,z as isSHA256,ke as isSafari,q as isSnakeCase,p as isString,d as isSymbol,pe as isTablet,Be as isThisMonth,He as isThisWeek,Re as isThisYear,Te as isTime,Oe as isTime12,Ie as isTime24,Ce as isTimestamp,Pe as isToday,ze as isTomorrow,S as isURL,W as isUUID,h as isUndefined,G as isUppercase,xe as isWechat,We as isWeekday,Se as isWeekend,ge as isWindows,le as isWindowsPhone,we as isWindowsTablet,Le as isYesterday};
