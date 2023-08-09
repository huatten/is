/**
 * 检查value是不是Date
 * @param value
 * @return boolean
 * @example
 *
 * isDate(new Date())
 * // => true
 *
 * isDate('2020-02-02')
 * // => false
 */
import typeOf from '../shared/typeOf'
const isDate = function (value: Date): boolean {
  return typeOf(value) === 'date'
}

export default isDate
