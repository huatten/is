/**
 * 检查value是不是Map对象
 * @param value
 * @return boolean
 * @example
 *
 * isMap(new Map())
 * // => true
 *
 * isMap(new Set())
 * // => false
 *
 * isMap({})
 * // => false
 */
const isMap = function (value) {
  return value instanceof Map
}

export default isMap