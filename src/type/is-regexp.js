/**
 * 检查value是不是Regexp
 * @param value
 * @return boolean
 * @example
 *
 * isRegexp(/\d/)
 * // => true
 *
 * isRegexp(new RegExp(/\d/))
 * // => true
 *
 * isRegexp(1)
 * // => false
 */
import typeOf from '../shared/typeOf'
const isRegexp = function (value) {
  return typeof value === 'object' && typeOf(value) === 'regexp'
}

export default isRegexp
