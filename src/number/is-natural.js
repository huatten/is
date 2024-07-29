/**
 * 检查value是不是自然数 自然数是非负整数（包括零）。
 * @param value
 * @return boolean
 * @example
 *
 * isNatural(121212)
 * // => true
 *
 * isNatural(0)
 * // => true
 *
 * isNatural(0.99)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
const isNatural = function (value) {
  assertNumber(value, 'isNatural')
  return Number.isInteger(value) && value >= 0
}

export default isNatural
