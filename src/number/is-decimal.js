/**
 * 检查value是不是小数
 * @param value
 * @return boolean
 * @example
 *
 * isDecimal(19.99)
 * // => true
 *
 * isDecimal(-19.99)
 * // => true
 *
 * isDecimal(.89)
 * // => true
 *
 * isDecimal(99.00)
 * // => false
 *
 * isDecimal(985)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
const isDecimal = function (value) {
  assertNumber(value, 'isDecimal')
  return !Number.isInteger(value)
}

export default isDecimal
