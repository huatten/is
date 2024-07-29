/**
 * 检查value是不是负数
 * @param value
 * @return boolean
 * @example
 *
 * isNegative(-121212)
 * // => true
 *
 * isNegative(-10.09)
 * // => true
 *
 * isNegative(.89)
 * // => false
 *
 * isNegative(100)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
import typeOf from '../shared/typeOf'
const isNegative = function (value) {
  assertNumber(value, 'isNegative')
  return typeOf(value) === 'number' && value < 0
}

export default isNegative
