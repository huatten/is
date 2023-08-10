/**
 * 检查value是不是NaN
 * @param value
 * @return boolean
 * @example
 *
 * isNan(NaN)
 * // => true
 *
 * isNan(1)
 * // => false
 */
const isNan = function (value) {
  return typeof value === 'number' && Number.isNaN(value)
}

export default isNan
