/**
 * 检查value是不是有限的数
 * @param value
 * @return boolean
 * @example
 *
 * isFinite(12)
 * // => true
 *
 * isFinite(12/0)
 * // => false
 *
 * isFinite(Infinity)
 * // => false
 *
 * isFinite(-Infinity)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
import typeOf from '../shared/typeOf'
const isFinite = function (value) {
  assertNumber(value, 'isFinite')
  return typeOf(value) === 'number ' && Number.isFinite(value)
}

export default isFinite
