/**
 * 判断是不是Number
 * @param value
 */
import typeOf from '../shared/typeOf'
const isDate = function (value: Date): boolean {
  return typeOf(value) === 'date'
}

export default isDate
