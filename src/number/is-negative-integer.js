/**
 * 检查value是不是负整数
 * @param value
 * @return boolean
 * @example
 *
 * isNegativeInteger(-10)
 * // => true
 *
 * isNegativeInteger(-0)
 * // => false
 *
 * isNegativeInteger(0)
 * // => false
 *
 * isNegativeInteger(-10.99)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
const isNegativeInteger = function (value) {
  assertNumber(value, 'isNegativeInteger')
  return Number.isInteger(value) && value < 0
}

export default isNegativeInteger
