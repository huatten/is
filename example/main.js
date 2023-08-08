import is from '../dist/is.esm.js'
import { isBrowser } from '../dist/is.esm.js'
import { isArray } from '../dist/type/min.esm.js'
import { isNode } from '../dist/is.esm.js'

console.log(is.function(() => {}))
console.log(is.hexColor('#000000000'))
console.log(isArray([]))
console.log(isBrowser())
console.log(isNode())
