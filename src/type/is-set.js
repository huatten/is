/**
 * 检查value是不是Set对象
 * @param value
 * @return boolean
 * @example
 *
 * isSet(new Set())
 * // => true
 *
 * isSet(new Map())
 * // => false
 *
 * isSet([])
 * // => false
 */
const isSet = function (value) {
  return value instanceof Set
}

export default isSet
