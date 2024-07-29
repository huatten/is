/**
 * 检查value是不是无限的数
 * @param value
 * @return boolean
 * @example
 *
 * isInfinite(Infinity)
 * // => true
 *
 * isInfinite(12/0)
 * // => true
 *
 * isInfinite(1111111)
 * // => false
 *
 * isInfinite(-100101010)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
import typeOf from '../shared/typeOf'
const isInfinite = function (value) {
  assertNumber(value, 'isInfinite')
  return typeOf(value) === 'number ' && !Number.isFinite(value)
}

export default isInfinite
