/**
 * 检查value是不是Undefined
 * @param value
 * @return boolean
 * @example
 *
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined(null)
 * // => false
 */
const isUndefined = function (value) {
  return value === undefined
}

export default isUndefined
