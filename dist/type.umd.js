!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n="undefined"!=typeof globalThis?globalThis:n||self).type={})}(this,(function(n){"use strict";function e(n){const e=Object.prototype.toString.call(n).toLowerCase();return/\[object (.*)]/g.exec(e)[1]}n.isArguments=function(n){return"arguments"===e(n)||null!==n&&"object"==typeof n&&"callee"in n},n.isArray=function(n){return n&&Array.isArray(n)||"array"===e(n)},n.isArrayLike=function(n){return"null"!==e(n)&&"function"!==e(n)&&"number"===e(n.length)&&n.length>=0&&Number.isInteger(n.length)},n.isArraybuffer=function(n){return"arraybuffer"===e(n)},n.isBigint=function(n){return"bigint"===e(n)},n.isBoolean=function(n){return!0===n||!1===n||"boolean"===e(n)},n.isDate=function(n){return"date"===e(n)},n.isElement=function(n){return n instanceof Element||null!==n&&"object"===e(n)&&1===n.nodeType&&"string"===e(n.nodeName)},n.isEmpty=function(n){return null==n||("string"===e(n)&&""===n.trim()||("array"===e(n)&&0===n.length||"object"===e(n)&&0===Object.keys(n).length))},n.isFunction=function(n){return"function"==typeof n},n.isJSON=function(n){return"object"===e(n)},n.isNaN=function(n){return"number"==typeof n&&Number.isNaN(n)},n.isNull=function(n){return null===n},n.isNumber=function(n){return"number"==typeof n&&!Number.isNaN(n)&&Number(n)===n},n.isObject=function(n){return Object(n)===n},n.isRegexp=function(n){return"object"==typeof n&&"regexp"===e(n)},n.isString=function(n){return"string"===e(n)},n.isSymbol=function(n){return"symbol"===e(n)},n.isUndefined=function(n){return void 0===n}}));