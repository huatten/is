function n(n){const t=Object.prototype.toString.call(n).toLowerCase();return/\[object (.*)]/g.exec(t)[1]}const t=function(t){return"arguments"===n(t)||null!==t&&"object"==typeof t&&"callee"in t},r=function(t){return t&&Array.isArray(t)||"array"===n(t)},e=function(t){return"null"!==n(t)&&"function"!==n(t)&&"number"===n(t.length)&&t.length>=0&&Number.isInteger(t.length)},u=function(t){return"arraybuffer"===n(t)},o=function(t){return!0===t||!1===t||"boolean"===n(t)},i=function(t){return"bigint"===n(t)},c=function(t){return"date"===n(t)},f=function(t){return t instanceof Element||null!==t&&"object"===n(t)&&1===t.nodeType&&"string"===n(t.nodeName)},l=function(t){return null==t||("string"===n(t)&&""===t.trim()||("array"===n(t)&&0===t.length||"object"===n(t)&&0===Object.keys(t).length))},a=function(n){return"function"==typeof n},b=function(t){return"object"===n(t)},s=function(n){return"number"==typeof n&&Number.isNaN(n)},g=function(n){return null===n},y=function(n){return"number"==typeof n&&!Number.isNaN(n)&&Number(n)===n},m=function(n){return Object(n)===n},p=function(t){return"object"==typeof t&&"regexp"===n(t)},j=function(t){return"string"===n(t)},N=function(t){return"symbol"===n(t)},h=function(n){return void 0===n};export{t as isArguments,r as isArray,e as isArrayLike,u as isArraybuffer,i as isBigint,o as isBoolean,c as isDate,f as isElement,l as isEmpty,a as isFunction,b as isJSON,s as isNaN,g as isNull,y as isNumber,m as isObject,p as isRegexp,j as isString,N as isSymbol,h as isUndefined};