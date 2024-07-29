/**
 * 检查value是不是正小数
 * @param value
 * @return boolean
 * @example
 *
 * isPositiveDecimal(122.99)
 * // => true
 *
 * isPositiveDecimal(100.00)
 * // => false
 *
 * isPositiveDecimal(0.009)
 * // => true
 *
 * isPositiveDecimal(-10.99)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
const isPositiveDecimal = function (value) {
  assertNumber(value, 'isPositiveInteger')
  return !Number.isInteger(value) && value > 0
}

export default isPositiveDecimal
