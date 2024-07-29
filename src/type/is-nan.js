/**
 * 检查value是不是NaN
 * @param value
 * @return boolean
 * @example
 *
 * isNaN(NaN)
 * // => true
 *
 * isNaN(1)
 * // => false
 */
const isNaN = function (value) {
  return typeof value === 'number' && Number.isNaN(value)
}

export default isNaN
