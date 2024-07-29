/**
 * 检查value是不是整数
 * @param value
 * @return boolean
 * @example
 *
 * isInteger(121212)
 * // => true
 *
 * isInteger(-10)
 * // => true
 *
 * isInteger(01)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
const isInteger = function (value) {
  assertNumber(value, 'isInteger')
  return Number.isInteger(value)
}

export default isInteger
