/**
 * 检查value是不是Boolean
 * @param value
 * @return boolean
 * @example
 *
 * isBoolean(true)
 * // => true
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(12)
 * // => false
 *
 * isBoolean(null)
 * // => false
 */
import typeOf from '../shared/typeOf'
const isBoolean = function (value) {
  return value === true || value === false || typeOf(value) === 'boolean'
}

export default isBoolean
