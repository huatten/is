/**
 * 检查value是不是正整数
 * @param value
 * @return boolean
 * @example
 *
 * isPositiveInteger(121212)
 * // => true
 *
 * isPositiveInteger(-10)
 * // => false
 *
 * isPositiveInteger(0)
 * // => false
 *
 * isPositiveInteger(10.99)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
const isPositiveInteger = function (value) {
  assertNumber(value, 'isPositiveInteger')
  return Number.isInteger(value) && value > 0
}

export default isPositiveInteger
