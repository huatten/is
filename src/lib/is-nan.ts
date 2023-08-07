/**
 * 判断是不是NaN
 * @param value
 */
import typeOf from './utils/typeOf'
const isNan = function (value: number): boolean {
  return typeOf(value) === 'number' && Number.isNaN(value)
}

export default isNan
