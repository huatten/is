/**
 * 检查value是不是null
 * @param value
 * @return boolean
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull('null')
 * // => false
 *
 * isNull(void)
 * // => false
 */
const isNull = function (value) {
  return value === null
}

export default isNull
