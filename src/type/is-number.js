/**
 * 检查value是不是Number
 * @param value
 * @return boolean
 *
 * @example
 *
 * isNumber(1)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber(NaN)
 * // => false
 *
 * isNumber('1')
 * // => false
 */
const isNumber = function (value) {
  return typeof value === 'number' && !Number.isNaN(value) && Number(value) === value
}

export default isNumber
