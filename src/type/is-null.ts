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
const isNull = function (value: null): boolean {
  return value === null
}

export default isNull
