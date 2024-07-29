/**
 * 检查value是不是负小数
 * @param value
 * @return boolean
 * @example
 *
 * isNegativeDecimal(-10.99)
 * // => true
 *
 * isNegativeDecimal(-.99)
 * // => true
 *
 * isNegativeDecimal(0)
 * // => false
 *
 * isNegativeDecimal(10.99)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
const isNegativeDecimal = function (value) {
  assertNumber(value, 'isNegativeDecimal')
  return !Number.isInteger(value) && value < 0
}

export default isNegativeDecimal
