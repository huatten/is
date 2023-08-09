/**
 * 检查value是不是String
 * @param value
 * @return boolean
 * @example
 *
 * isString('1')
 * // => true
 *
 * isString(1)
 * // => false
 */
import typeOf from '../shared/typeOf'
const isString = function (value: string): boolean {
  return typeof value === 'string' || typeOf(value) === 'string'
}

export default isString
