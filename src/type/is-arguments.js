/**
 * 检查value是不是arguments对象
 * @param value
 * @return boolean
 * @example
 *
 * isArguments(function() { return arguments; }())
 * // => true
 *
 * isArguments([123])
 * // => false
 */
import typeOf from '../shared/typeOf'
const isArguments = function (value) {
  return typeOf(value) === 'arguments' || (value !== null && typeof value === 'object' && 'callee' in value)
}

export default isArguments
