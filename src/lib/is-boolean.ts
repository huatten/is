/**
 * 判断是不是数组
 * @param value
 */
import typeOf from './utils/typeOf'
const isBoolean = function (value: any): boolean {
  return value === true || value === false || typeOf(value) === 'boolean'
}

export default isBoolean
