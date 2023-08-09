import is from '../dist/is.esm.js'
import { isBrowser, isHexColor } from '../dist/is.esm.js'
import { isArray, isNumber, isNan, isRegexp, isBoolean } from '../dist/type/min.esm.js'
import { isNode } from '../dist/env/min.esm.js'
import { isToday } from '../dist/date/min.esm.js'

console.log(is.function(() => {}))
console.log(is.hexColor('#000000000'))
console.log('isArray', isArray(document.body.children))
console.log(isBrowser())
console.log(isNode())
console.log('Infinity', isNumber(Infinity))
console.log('Number.MAX_VALUE', isNumber(Number.MAX_VALUE))
console.log('NaN', isNumber(NaN))
console.log('isRegexp', isRegexp(new RegExp(/\d/)))
console.log('isRegexp', isRegexp(/\d/))
console.log('isBoolean', isBoolean(null))
console.log('isNan', isNan(1))
console.log('isToday', isToday(new Date()))
console.log('isHexColor', isHexColor('f90fff23f'))
