!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("core-js/modules/esnext.async-iterator.every.js"),require("core-js/modules/esnext.iterator.constructor.js"),require("core-js/modules/esnext.iterator.every.js")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/esnext.async-iterator.every.js","core-js/modules/esnext.iterator.constructor.js","core-js/modules/esnext.iterator.every.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).regexp={})}(this,(function(e){"use strict";function t(e){const t=Object.prototype.toString.call(e).toLowerCase();return/\[object (.*)]/g.exec(t)[1]}function s(e,s){if(!("string"===t(e))){const n=t(e);throw new TypeError(`${s}: Expected a string but received a ${n}`)}}e.isCamelCase=function(e){s(e,"isCamelCase");return e&&/^[a-z]+([A-Z][a-z]*)*$/.test(e)},e.isChinese=function(e){s(e,"isChinese");return e&&/^[\u4e00-\u9fa5]+$/.test(e)},e.isEnglish=function(e){s(e,"isEnglish");return e&&/^[A-Za-z]+$/.test(e)},e.isHexColor=function(e){s(e,"isHexColor");return e&&/^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e)},e.isHtml=function(e){s(e,"isHtml");return e&&/<([a-z]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)/i.test(e)},e.isJWT=function(e){s(e,"isJWT");const t=e.split(".");if(3!==t.length)return!1;const n=/^[A-Za-z0-9-_]+$/;return t.every((e=>n.test(e)))},e.isLowercase=function(e){s(e,"isLowercase");return/^[a-z]+$/.test(e)},e.isMD5=function(e){s(e,"isMD5");return e&&/^[a-fA-F0-9]{32}$/.test(e)},e.isPascalCase=function(e){s(e,"isPascalCase");return e&&/^[A-Z][a-z]*([A-Z][a-z]*)*$/.test(e)},e.isPhoneNumber=function(e){return e&&/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e)},e.isProvince=function(e){s(e,"isProvince");return e&&/^(北京|天津|上海|重庆|河北|山西|辽宁|吉林|黑龙江|江苏|浙江|安徽|福建|江西|山东|河南|湖北|湖南|广东|海南|四川|贵州|云南|陕西|甘肃|青海|台湾|内蒙古|广西|西藏|宁夏|新疆|香港|澳门)$/.test(e)},e.isSHA256=function(e){s(e,"isSHA256");return e&&/^[a-fA-F0-9]{64}$/.test(e)},e.isSnakeCase=function(e){s(e,"isSnakeCase");return e&&/^[a-z0-9]+(_[a-z0-9]+)*$/.test(e)},e.isURL=function(e){s(e,"isURL");return e&&/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(e)},e.isUUID=function(e){s(e,"isUUID");return e&&/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(e)},e.isUppercase=function(e){s(e,"isUppercase");return/^[A-Z]+$/.test(e)}}));
