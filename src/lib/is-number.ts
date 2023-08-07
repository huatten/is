/**
 * 判断是不是Number
 * @param value
 */
import typeOf from './utils/typeOf'
const isNumber = function (value: number): boolean {
  return typeof value === 'number' || typeOf(value) === 'number' || Number.isFinite(value)
}

export default isNumber
