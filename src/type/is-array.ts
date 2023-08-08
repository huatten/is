/**
 * 判断是不是数组
 * @param value
 */
import typeOf from '../shared/typeOf'
const isArray = function (value: any): boolean {
  return (value && Array.isArray(value)) || typeOf(value) === 'array'
}

export default isArray
