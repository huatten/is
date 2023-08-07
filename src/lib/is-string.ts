/**
 * 判断是不是String
 * @param value
 */
import typeOf from './utils/typeOf'
const isString = function (value: string): boolean {
  return typeof value === 'string' || value instanceof String || typeOf(value) === 'string'
}

export default isString
