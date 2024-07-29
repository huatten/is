/**
 * 检查value是不是奇数
 * @param value
 * @return boolean
 * @example
 *
 * isOdd(11)
 * // => true
 *
 * isOdd(-9)
 * // => true
 *
 * isOdd(10)
 * // => false
 *
 * isOdd(9.9)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
import typeOf from '../shared/typeOf'
const isOdd = function (value) {
  assertNumber(value, 'isOdd')
  return typeOf(value) === 'number ' && (value % 2 === 1 || value % 2 === -1)
}

export default isOdd
