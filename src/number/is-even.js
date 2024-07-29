/**
 * 检查value是不是偶数
 * @param value
 * @return boolean
 * @example
 *
 * isEven(12)
 * // => true
 *
 * isEven(-10)
 * // => true
 *
 * isEven(9)
 * // => false
 *
 * isEven(9.9)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
import typeOf from '../shared/typeOf'
const isEven = function (value) {
  assertNumber(value, 'isEven')
  return typeOf(value) === 'number ' && value % 2 === 0
}

export default isEven
