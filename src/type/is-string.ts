/**
 * 判断是不是String
 * @param value
 */
import typeOf from '../shared/typeOf'
const isString = function (value: string): boolean {
  return typeof value === 'string' || typeOf(value) === 'string'
}

export default isString
