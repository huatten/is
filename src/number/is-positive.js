/**
 * 检查value是不是正数
 * @param value
 * @return boolean
 * @example
 *
 * isPositive(121212)
 * // => true
 *
 * isPositive(10.09)
 * // => true
 *
 * isPositive(.89)
 * // => true
 *
 * isPositive(-0.99)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
import typeOf from '../shared/typeOf'
const isPositive = function (value) {
  assertNumber(value, 'isPositive')
  return typeOf(value) === 'number' && value > 0
}

export default isPositive
